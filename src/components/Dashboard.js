import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { FaHome, FaList, FaChartBar, FaUser, FaRupeeSign, FaUsers, FaShoppingCart } from "react-icons/fa";
import { Line, Pie } from "react-chartjs-2"; // Import Line and Pie chart
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

function Dashboard() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [graphData, setGraphData] = useState({
    labels: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    datasets: [
      {
        label: "Total Payments",
        data: [15000, 20000, 25000, 30000, 35000, 40000],
        borderColor: "#6c63ff",
        backgroundColor: "rgba(108, 99, 255, 0.2)",
        tension: 0.4,
        pointRadius: 0, // Remove dots on the line
      },
      {
        label: "On Track",
        data: [10000, 15000, 20000, 25000, 30000, 35000],
        borderColor: "#87CEEB", // Changed to sky blue
        backgroundColor: "rgba(135, 206, 235, 0.2)", // Changed to sky blue with transparency
        tension: 0.4,
        pointRadius: 0, // Remove dots on the line
      },
    ],
  });

  const [pieData, setPieData] = useState({
    labels: ["Total Payments", "On Track"],
    datasets: [
      {
        data: [15000, 10000], // Initial data
        backgroundColor: ["#6c63ff", "#87CEEB"], // Changed "On Track" to sky blue
        hoverBackgroundColor: ["#574bff", "#6BB7D6"], // Changed hover color to a slightly darker shade of sky blue
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setGraphData((prevData) => {
        const newTotalPayments = [...prevData.datasets[0].data];
        const newOnTrack = [...prevData.datasets[1].data];

        // Simulate dynamic updates with randomness to ensure frequent intersections
        const totalChange = Math.floor(Math.random() * 2000 - 1000); // Random change for Total Payments
        const onTrackChange = Math.floor(Math.random() * 2000 - 1000); // Random change for On Track

        // Ensure values cross each other by occasionally swapping the changes
        if (Math.random() > 0.5) {
          newTotalPayments.push(newTotalPayments[newTotalPayments.length - 1] + totalChange);
          newOnTrack.push(newOnTrack[newOnTrack.length - 1] + onTrackChange);
        } else {
          newTotalPayments.push(newTotalPayments[newTotalPayments.length - 1] + onTrackChange);
          newOnTrack.push(newOnTrack[newOnTrack.length - 1] + totalChange);
        }

        // Keep only the last 6 data points
        if (newTotalPayments.length > 6) newTotalPayments.shift();
        if (newOnTrack.length > 6) newOnTrack.shift();

        return {
          ...prevData,
          datasets: [
            { ...prevData.datasets[0], data: newTotalPayments },
            { ...prevData.datasets[1], data: newOnTrack },
          ],
        };
      });
    }, 7000); // Update every 7 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPieData((prevData) => {
        const totalPayments = graphData.datasets[0].data.reduce((a, b) => a + b, 0); // Sum of Total Payments
        const onTrack = graphData.datasets[1].data.reduce((a, b) => a + b, 0); // Sum of On Track

        return {
          ...prevData,
          datasets: [
            {
              ...prevData.datasets[0],
              data: [totalPayments, onTrack], // Update pie chart data dynamically
            },
          ],
        };
      });
    }, 7000); // Update every 7 seconds (same as the line chart)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [graphData]); // Update pie chart whenever line chart data changes

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === "Dashboard") navigate("/dashboard");
    if (menu === "Price List") navigate("/price-list"); // Added missing navigation
    if (menu === "Report") navigate("/report"); // Added missing navigation
    if (menu === "Profile") navigate("/profile");
  };

  const handleLogout = () => {
    navigate("/");
  };

  const graphOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true, // Show legend
        position: "top",
        labels: {
          usePointStyle: true, // Use point style for legend
          boxWidth: 8,
        },
      },
      tooltip: {
        enabled: true, // Enable tooltips
        mode: "nearest", // Show tooltip for the nearest point on the line
        intersect: false, // Allow tooltip to appear even if not directly over a point
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines on the x-axis
        },
        ticks: {
          color: "#707EAE", // Customize tick color
          font: {
            size: 12,
          },
        },
      },
      y: {
        display: false, // Remove side values from the y-axis
        grid: {
          display: false, // Remove grid lines on the y-axis
        },
      },
    },
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
                <p>Rs. 2,00,000</p>
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
              <Line data={graphData} options={graphOptions} /> {/* Add Line chart */}
            </div>
            <div className="chart">
              <h3>Payment Analysis</h3>
              <Pie data={pieData} /> {/* Add Pie chart */}
            </div>
          </div>
          <div className="recent-payments">
            <div className="recent-payments-header">
              <h3>Recent Payments</h3>
              <a href="#" className="see-all-link">See All</a>
            </div>
            <ul>
              <li>
                <span className="profile-picture">
                  <img src={require("../assets/pic.jpg")} alt="Profile" />
                </span>
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
                <span className="profile-picture">
                  <img src={require("../assets/pic.jpg")} alt="Profile" />
                </span>
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
                <span className="profile-picture">
                  <img src={require("../assets/pic.jpg")} alt="Profile" />
                </span>
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