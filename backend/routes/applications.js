const express = require("express");
const { applyForJob } = require("../controllers/applicationController");
const router = express.Router();

router.post("/", applyForJob);

module.exports = router;
