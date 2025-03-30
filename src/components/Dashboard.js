import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src={require("../assets/Logo.png")} alt="Logo" className="sidebar-logo-image" />
          <h2 style={{ fontFamily: "Arial, sans-serif" }}>NAME</h2>
        </div>
        <nav className="sidebar-menu">
          <ul>
            <li>Dashboard</li>
            <li>Price List</li>
            <li>Report</li>
            <li>Profile</li>
          </ul>
        </nav>
        <button className="logout-button">Logout</button>
      </aside>
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h4>Pages/Dashboard</h4> 
          <h1>Dashboard</h1>
          <h2>Pollachi Branch</h2>
        </header>
        <section className="dashboard-content">
          <div className="dashboard-card">Card 1</div>
          <div className="dashboard-card">Card 2</div>
          <div className="dashboard-card">Card 3</div>
          <div className="dashboard-card">Card 4</div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
