const { asyncHandler } = require("../utils/asyncHandler.js");
require("dotenv").config();

const {
  getKey,
  enqueueJobInQueue,
  deQueueJobFromQueue,
  increment,
  decrement,
  getQueueLength,
  setKey,
} = require("../redis/redisHelper.js");

const { REDIS_KEYS, VIDEO_PROCESS_STATES } = require("../lib/constants.js");

const { triggerTranscodingJob } = require("../utils/ecsTranscodingTrigger.js");
const Video = require("../models/video.model.js");

const { deleteObjectFile } = require("../utils/s3SignedUrl.js");

const handleS3Trigger = asyncHandler(async (req, res) => {
  console.log("Trigger from S3.....");
  const { s3EventData } = req.body;
  // const s3eventdata = {
  //   s3SchemaVersion: "1.0",
  //   configurationId: "video-upload",
  //   bucket: {
  //     name: "video-uplaod-temp",
  //     ownerIdentity: { principalId: "A26A2QGE7FEMNY" },
  //     arn: "arn:aws:s3:::video-uplaod-temp",
  //   },
  //   object: {
  //     key: "uploads/videos/timeout.mp4",
  //     size: 1206855,
  //     eTag: "d5beee05cee240cc495513f58a944aa7",
  //     sequencer: "006687C42C50B0BA18",
  //   },
  // };

  console.log("s3eventdata :", s3EventData);

  if (!s3EventData) {
    return res.status(400).json({ message: "S3 Event Data not found!" });
  }

  console.log("S3 Event Data", s3EventData);

  const key = s3EventData.object.key;

  const currentJobCount = parseInt(
    await getKey(REDIS_KEYS.CURRENT_VIDEO_TRANSCODING_JOB_COUNT)
  );

  console.log("current job count: ", currentJobCount);

  const fileName = key.split("/").pop().split(".")[0];

  const video = await Video.create({
    fileName: fileName,
    objectKey: key,
    progress: VIDEO_PROCESS_STATES.PENDING,
  });

  if (!video) {
    return res.status(500).json({
      message: "Failed to create video. Please try again later.",
    });
  }

  if (currentJobCount < 5) {
    await increment(REDIS_KEYS.CURRENT_VIDEO_TRANSCODING_JOB_COUNT);

    const job = {
      fileName,
      objectKey: key,
      progress: VIDEO_PROCESS_STATES.PROCESSING,
    };

    await triggerTranscodingJob(job);

    console.log("Triggered transcoding job");

    await Video.findOneAndUpdate(
      { objectKey: job.objectKey },
      {
        $set: { progress: job.progress },
      }
    );

    return res.status(200).json({
      message: `Video transcoding job triggered for ${fileName}`,
    });
  }
  //enqueue the job
  const job = {
    fileName,
    objectKey: key,
    progress: VIDEO_PROCESS_STATES.QUEUED,
  };

  await enqueueJobInQueue(job);

  return res.status(200).json({
    message: `Job enqueued successfully for ${fileName}`,
  });
});

const handleECSTrigger = asyncHandler(async (req, res) => {
  console.log("Trigger from ECS.....");
  //   WEBHOOK
  const { key, progress, videoResolutions } = req.body;

  const video = await Video.findOne({ objectKey: key });

  if (!video) {
    return res.status(404).json({ message: "video not found!" });
  }

  if (progress === VIDEO_PROCESS_STATES.COMPLETED) {
    video.progress = VIDEO_PROCESS_STATES.COMPLETED;
    video.videoResolutions = videoResolutions;
    await video.save();
    await deleteObjectFile(key);
  }

  if (progress === VIDEO_PROCESS_STATES.FAILED) {
    video.progress = VIDEO_PROCESS_STATES.FAILED;
    video.videoResolutions = videoResolutions;
    await video.save();
  }

  await decrement(REDIS_KEYS.CURRENT_VIDEO_TRANSCODING_JOB_COUNT);

  const currentJobCount = parseInt(
    await getKey(REDIS_KEYS.CURRENT_VIDEO_TRANSCODING_JOB_COUNT)
  );

  const queueLength = await getQueueLength();

  if (queueLength === 0) {
    if (currentJobCount > 0) {
      await setKey(REDIS_KEYS.CURRENT_VIDEO_TRANSCODING_JOB_COUNT, 0);
    }

    console.log("Trigger from ECS: Processing queue is empty.");
    return res.status(200).json({
      message: "Trigger from ECS: Queue is empty",
    });
  }

  const availableSlots = 5 - currentJobCount;

  if (availableSlots > 0) {
    for (let i = 0; i < availableSlots; i++) {
      const job = await deQueueJobFromQueue();
      job.progress = VIDEO_PROCESS_STATES.PROCESSING;

      await increment(REDIS_KEYS.CURRENT_VIDEO_TRANSCODING_JOB_COUNT);
      await triggerTranscodingJob(job);

      await Video.findOneAndUpdate(
        { objectKey: job.objectKey },
        {
          $set: { progress: job.progress },
        }
      );

      console.log("Transcoding job triggered successfully for:", job.fileName);
    }

    return res.status(200).json({
      message: `Trigger from ECS: ${availableSlots} jobs triggered successfully`,
    });
  }
});

setTimeout(() => handleS3Trigger, 20000);
module.exports = { handleS3Trigger, handleECSTrigger };
