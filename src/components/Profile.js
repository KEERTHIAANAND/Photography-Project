import React from "react";
import "./Profile.css"; // Corrected the import path to match the file name
import { FaHome, FaList, FaChartBar, FaUser } from "react-icons/fa";

function Profile() {
  return (
    <div className="profile-container">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src={require("../assets/Logo.png")} alt="Logo" className="sidebar-logo-image" />
          <h2>NAME</h2>
        </div>
        <nav className="sidebar-menu">
          <ul>
            <li>
              <a href="/dashboard">
                <FaHome className="menu-icon" />
                Dashboard
              </a>
            </li>
            <li>
              <a href="/price-list">
                <FaList className="menu-icon" />
                Price List
              </a>
            </li>
            <li>
              <a href="/report">
                <FaChartBar className="menu-icon" />
                Report
              </a>
            </li>
            <li className="active">
              <a href="/profile">
                <FaUser className="menu-icon" />
                Profile
              </a>
            </li>
          </ul>
        </nav>
        <button className="logout-button">Logout</button>
      </aside>
      <main className="profile-main">
        <header className="profile-header">
          <div>
            <h4>Pages / Profile</h4>
            <h1>Profile</h1>
            <h2>Pollachi Branch</h2>
          </div>
          <div className="header-right">
            <img src={require("../assets/pic.jpg")} alt="Profile" className="profile-photo" />
          </div>
        </header>
        <section className="profile-content">
          <div className="profile-card">
            <div className="profile-header">
              <h3>Your Profile</h3>
              <div className="profile-picture-container">
                <img src={require("../assets/pic.jpg")} alt="Profile" className="profile-picture-large" />
              </div>
            </div>
            <div className="profile-body">
              <div className="profile-details">
                <p><strong>Admin ID:</strong> 110A</p>
                <p><strong>Name:</strong> Adela Parkson</p>
                <p><strong>Address:</strong> Pollachi</p>
                <p><strong>Contact No.:</strong> 984123XXXX</p>
                <p><strong>Email:</strong> abc123@gmail.com</p>
                <p><strong>Password:</strong> ******</p>
              </div>
              <button className="edit-button">Edit</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Profile;
