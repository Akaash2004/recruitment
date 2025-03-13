const Job = require("../models/Job");

exports.createJob = async (req, res) => {
   const { title, description, company, location, postedBy } = req.body;
   try {
       const newJob = new Job({ title, description, company, location, postedBy });
       await newJob.save();
       res.json({ message: "Job created successfully" });
   } catch (error) {
       res.status(500).json({ error: "Server error" });
   }
};
