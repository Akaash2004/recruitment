import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"; 
import Home from "./pages/Home.jsx"; 
import Jobs from "./pages/Jobs.jsx"; 
import ApplyJob from "./pages/ApplyJob.jsx"; 
import AdminPanel from "./pages/AdminPanel.jsx"; 
import "./styles/global.css"; // Ensure this file exists

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/apply-job" element={<ApplyJob />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
