import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/JobList.css";

function AdminPanel() {
    const [jobs, setJobs] = useState([]);
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/api/jobs")
            .then(response => setJobs(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/jobs/${id}`)
            .then(() => setJobs(jobs.filter(job => job._id !== id)))
            .catch(error => console.error(error));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/jobs", { title, company, location })
            .then(response => setJobs([...jobs, response.data]))
            .catch(error => console.error(error));
    };

    return (
        <div className="admin-panel">
            <h2>Admin Panel</h2>

            {/* Add New Job Form */}
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Job Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} required />
                <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
                <button type="submit">Add Job</button>
            </form>

            {/* Job List */}
            <div className="job-list">
                {jobs.map((job) => (
                    <div key={job._id} className="job-card">
                        <h3>{job.title}</h3>
                        <p>{job.company} - {job.location}</p>
                        <button className="delete-btn" onClick={() => handleDelete(job._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminPanel;
