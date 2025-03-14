import React, { useState } from "react";
import axios from "axios";

const InterviewSchedule = () => {
  const [interviewDetails, setInterviewDetails] = useState({
    candidateId: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setInterviewDetails({ ...interviewDetails, [e.target.name]: e.target.value });
  };

  const scheduleInterview = async () => {
    await axios.post("/api/interviews/schedule", interviewDetails);
    alert("Interview Scheduled Successfully");
  };

  return (
    <div>
      <h2>Schedule Interview</h2>
      <input type="text" name="candidateId" placeholder="Candidate ID" onChange={handleChange} />
      <input type="date" name="date" onChange={handleChange} />
      <input type="time" name="time" onChange={handleChange} />
      <textarea name="notes" placeholder="Notes" onChange={handleChange}></textarea>
      <button onClick={scheduleInterview}>Schedule</button>
    </div>
  );
};

export default InterviewSchedule;
