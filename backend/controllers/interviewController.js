const Interview = require("../models/Interview");

const scheduleInterview = async (req, res) => {
  try {
    const { candidateId, date, time, notes } = req.body;
    const newInterview = new Interview({ candidateId, date, time, notes });
    await newInterview.save();
    res.status(201).json({ message: "Interview Scheduled" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = { scheduleInterview };
