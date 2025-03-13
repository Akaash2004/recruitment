import React, { useState } from "react";
import "../styles/Forms.css";

function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signing up:", { name, email, password });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit">Signup</button>
        </form>
    );
}

export default SignupForm;
