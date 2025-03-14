import React, { useEffect, useState } from "react";
import axios from "axios";

const CandidateProfile = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const res = await axios.get("/api/applications/user");
      setApplications(res.data);
    };
    fetchApplications();
  }, []);

  return (
    <div>
      <h2>My Applications</h2>
      <ul>
        {applications.map((app) => (
          <li key={app.id}>{app.jobTitle} - {app.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateProfile;
