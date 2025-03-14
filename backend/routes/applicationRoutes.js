const express = require("express");
const router = express.Router();
const { getUserApplications } = require("../controllers/applicationController");

router.get("/user", getUserApplications);

module.exports = router;
