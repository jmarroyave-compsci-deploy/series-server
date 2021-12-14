import express from "express";
import * as controller from "../../controllers/2.0/Topic";
import { asyncHandler } from "../../lib/asyncHandler";

const router = express.Router();
router.use("/2.0/api/topics/:topic", asyncHandler(controller.getTopic, "topicGet"));
router.use("/2.0/api/topics", asyncHandler(controller.get, "topicsGet"));

export default router;
