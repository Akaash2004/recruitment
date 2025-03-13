import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/Dashboard.css";

function Dashboard() {
    const { user } = useContext(AuthContext);
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:5000/api/applications/user/${user._id}`)
                .then(response => setApplications(response.data))
                .catch(error => console.error(error));
        }
    }, [user]);

    return (
        <div className="dashboard">
            <h2>Welcome, {user ? user.name : "User"}</h2>
            <h3>Your Job Applications</h3>
            
            {applications.length > 0 ? (
                <ul className="application-list">
                    {applications.map(app => (
                        <li key={app._id} className="application-card">
                            <h4>{app.jobTitle}</h4>
                            <p>Company: {app.company}</p>
                            <p>Status: <span className={`status ${app.status.toLowerCase()}`}>{app.status}</span></p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No applications found.</p>
            )}
        </div>
    );
}

export default Dashboard;
