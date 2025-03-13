import React from "react";
import { Link } from "react-router-dom";
import "../styles/JobCard.css";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <Link to={`/apply/${job._id}`}>Apply Now</Link>
    </div>
  );
};

export default JobCard;
