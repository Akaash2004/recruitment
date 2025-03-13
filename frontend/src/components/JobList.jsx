import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";
import "../styles/JobList.css";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/jobs")
      .then(response => setJobs(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
