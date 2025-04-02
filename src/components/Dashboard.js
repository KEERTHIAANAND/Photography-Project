import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleDashboard = (e) => {
    e.preventDefault(); // Prevent form submission
    navigate("/"); // Navigate to the Dashboard page
  };

  const handleLogout = () => {
    navigate("/"); // Navigate to the login page
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src={require("../assets/Logo.png")} alt="Logo" className="sidebar-logo-image" />
          <h2 style={{ fontFamily: "Arial, sans-serif" }}>NAME</h2>
        </div>
        <nav className="sidebar-menu">
          <form onSubmit={handleDashboard}>
            <ul>
              <li>Dashboard</li>
              <li>Price List</li>
              <li>Report</li>
              <li>Profile</li>
            </ul>
          </form>
        </nav>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </aside>
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h4>Pages / Dashboard</h4>
            <h1>Main Dashboard</h1>
            <h2>Pollachi Branch</h2>
          </div>
        </header>
        <section className="dashboard-content">
          <div className="dashboard-card">Card 1
            <h1></h1>
          </div>
          <div className="dashboard-card">Card 2</div>
          <div className="dashboard-card">Card 3</div>
          <div className="dashboard-card">Card 4</div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
