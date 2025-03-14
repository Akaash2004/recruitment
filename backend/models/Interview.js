const mongoose = require("mongoose");

const InterviewSchema = new mongoose.Schema({
  candidateId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  notes: { type: String },
});

module.exports = mongoose.model("Interview", InterviewSchema);
