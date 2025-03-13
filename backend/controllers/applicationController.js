const Application = require("../models/Application");

exports.applyForJob = async (req, res) => {
   const { candidate, job } = req.body;
   try {
       const newApplication = new Application({ candidate, job });
       await newApplication.save();
       res.json({ message: "Application submitted successfully" });
   } catch (error) {
       res.status(500).json({ error: "Server error" });
   }
};
