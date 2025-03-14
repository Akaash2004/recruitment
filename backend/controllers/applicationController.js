const Application = require("../models/Application");

const getUserApplications = async (req, res) => {
  try {
    const userId = req.user.id;
    const applications = await Application.find({ userId });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = { getUserApplications };

