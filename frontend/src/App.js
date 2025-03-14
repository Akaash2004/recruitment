// Updated App.js to include routes for new features
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import ApplyJob from "./pages/ApplyJob";
import AdminPanel from "./pages/AdminPanel";
import Dashboard from "./components/Dashboard";
import JobPostingForm from "./components/JobPostingForm";
import CandidateProfile from "./pages/CandidateProfile";
import InterviewScheduler from "./pages/InterviewScheduler";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/apply/:id" element={<ApplyJob />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/post-job" element={<JobPostingForm />} />
          <Route path="/profile" element={<CandidateProfile />} />
          <Route path="/schedule-interview" element={<InterviewScheduler />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
