const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
   candidate: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
   job: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
   status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" },
});

module.exports = mongoose.model("Application", ApplicationSchema);
