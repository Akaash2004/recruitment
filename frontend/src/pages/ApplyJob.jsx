import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Forms.css";

function ApplyJob() {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [resume, setResume] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/jobs/${id}`)
            .then(response => setJob(response.data))
            .catch(error => console.error(error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("resume", resume);

        axios.post(`http://localhost:5000/api/applications/${id}`, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        })
        .then(response => alert("Application submitted successfully!"))
        .catch(error => console.error(error));
    };

    return (
        <div className="apply-job">
            {job ? (
                <>
                    <h2>Apply for {job.title}</h2>
                    <p>{job.company} - {job.location}</p>
                    <form className="form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setResume(e.target.files[0])} required />
                        <button type="submit">Submit Application</button>
                    </form>
                </>
            ) : (
                <p>Loading job details...</p>
            )}
        </div>
    );
}

export default ApplyJob;
