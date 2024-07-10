const { ECSClient, RunTaskCommand } = require("@aws-sdk/client-ecs");

const ecsClient = new ECSClient({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
  },
});

const config = {
  CLUSTER: process.env.CLUSTER,
  TASK: process.env.TASK,
};

const triggerTranscodingJob = async (job) => {
  try {
    const command = new RunTaskCommand({
      cluster: config.CLUSTER,
      taskDefinition: config.TASK,
      launchType: "FARGATE",
      count: 1,
      networkConfiguration: {
        awsvpcConfiguration: {
          assignPublicIp: "ENABLED",
          subnets: [
            "subnet-0f3342b17e0d3bdfa",
            "subnet-048166cef6d80fca7",
            "subnet-0e03daf352267b14b",
          ],
          securityGroups: ["sg-0e769d0c8b3eaea9c"],
        },
      },
      overrides: {
        containerOverrides: [
          //env variable
          {
            name: "transcoding-image",
            environment: [
              { name: "OBJECT_KEY", value: job.objectKey },
              {
                name: "TEMP_S3_BUCKET_NAME",
                value: process.env.TEMP_S3_BUCKET_NAME,
              },
              {
                name: "FINAL_S3_BUCKET_NAME",
                value: process.env.FINAL_S3_BUCKET_NAME,
              },
              {
                name: "AWS_ACCESS_KEY_ID",
                value: process.env.MY_AWS_ACCESS_KEY_ID,
              },
              {
                name: "AWS_SECRET_ACCESS_KEY",
                value: process.env.MY_AWS_SECRET_ACCESS_KEY,
              },
              { name: "WEBHOOK_URL", value: process.env.WEBHOOK_URL },
            ],
          },
        ],
      },
    });

    await ecsClient.send(command);
  } catch (error) {
    console.error("An error occurred while triggering transcoding job:", error);
    throw error;
  }
};

module.exports = { triggerTranscodingJob };
