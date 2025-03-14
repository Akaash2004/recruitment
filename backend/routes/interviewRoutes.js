const express = require("express");
const router = express.Router();
const { scheduleInterview } = require("../controllers/interviewController");

router.post("/schedule", scheduleInterview);

module.exports = router;
