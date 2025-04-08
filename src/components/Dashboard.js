import React, { useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { FaHome, FaList, FaChartBar, FaUser, FaRupeeSign, FaUsers, FaShoppingCart } from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === "Dashboard") navigate("/dashboard");
    if (menu === "Profile") navigate("/profile");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src={require("../assets/Logo.png")} alt="Logo" className="sidebar-logo-image" />
          <h2 style={{ fontFamily: "Arial, sans-serif" }}>NAME</h2>
        </div>
        <nav className="sidebar-menu">
          <ul>
            <li
              className={activeMenu === "Dashboard" ? "active" : ""}
              onClick={() => handleMenuClick("Dashboard")}
            >
              <FaHome className="menu-icon" />
              Dashboard
            </li>
            <li
              className={activeMenu === "Price List" ? "active" : ""}
              onClick={() => handleMenuClick("Price List")}
            >
              <FaList className="menu-icon" />
              Price List
            </li>
            <li
              className={activeMenu === "Report" ? "active" : ""}
              onClick={() => handleMenuClick("Report")}
            >
              <FaChartBar className="menu-icon" />
              Report
            </li>
            <li
              className={activeMenu === "Profile" ? "active" : ""}
              onClick={() => handleMenuClick("Profile")}
            >
              <FaUser className="menu-icon" />
              Profile
            </li>
          </ul>
        </nav>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </aside>
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h4>Pages / Dashboard</h4>
            <h1>Main Dashboard</h1>
            <h2>Pollachi Branch</h2>
          </div>
          <div className="header-right">
            <img
              src={require("../assets/pic.jpg")}
              alt="Profile"
              className="profile-photo"
              onClick={() => handleMenuClick("Profile")}
            />
          </div>
        </header>
        <section className="dashboard-content">
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <div className="card-icon-container">
                <FaUsers className="card-icon" />
              </div>
              <div className="card-details">
                <h3>Orders</h3>
                <p>45</p>
              </div>
            </div>
            <div className="dashboard-card">
              <div className="card-icon-container">
                <FaRupeeSign className="card-icon" />
              </div>
              <div className="card-details">
                <h3>Total Payments</h3>
                <p>Rs. 200,000</p>
              </div>
            </div>
            <div className="dashboard-card">
              <div className="card-icon-container">
                <FaUser className="card-icon" />
              </div>
              <div className="card-details">
                <h3>Pending</h3>
                <p>22</p>
              </div>
            </div>
          </div>
          <div className="dashboard-charts">
            <div className="chart">
              <h3>Total Payments</h3>
              <p>Rs. 200,000</p>
              {/* Add chart component here */}
            </div>
            <div className="chart">
              <h3>Payment Analysis</h3>
              {/* Add pie chart component here */}
            </div>
          </div>
          <div className="recent-payments">
            <div className="recent-payments-header">
              <h3>Recent Payments</h3>
              <a href="#" className="see-all-link">See All</a>
            </div>
            <ul>
              <li>
                <span>Mohan</span>
                <span className="price">
                  Rs. 3000
                  <div className="cart-icon-container">
                    <FaShoppingCart className="cart-icon" />
                  </div>
                </span>
                <span>30s ago</span>
              </li>
              <li>
                <span>Suron Maharjan</span>
                <span className="price">
                  Rs. 800
                  <div className="cart-icon-container">
                    <FaShoppingCart className="cart-icon" />
                  </div>
                </span>
                <span>58s ago</span>
              </li>
              <li>
                <span>Sandesh</span>
                <span className="price">
                  Rs. 5500
                  <div className="cart-icon-container">
                    <FaShoppingCart className="cart-icon" />
                  </div>
                </span>
                <span>1m ago</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
