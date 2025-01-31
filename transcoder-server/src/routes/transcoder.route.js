const {
  handleECSTrigger,
  handleS3Trigger,
} = require("../controllers/transcoder.controller.js");
const { Router } = require("express");
const {
  getAllVideos,
  getVideoByFileName,
  getVideoStatus,
} = require("../controllers/video.controller.js");

const router = Router();

router.post("/s3-trigger", handleS3Trigger);
router.post("/ecs-trigger", handleECSTrigger);

router.get("/get-all-videos", getAllVideos);
router.get("/v/:fileName", getVideoByFileName);
router.get("/s/:videoId", getVideoStatus);

module.exports = router;
