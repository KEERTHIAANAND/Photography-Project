import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission
    navigate("/dashboard"); // Navigate to the Dashboard page
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Branch Login</h1>
        <p>Enter your email and password to log in!</p>
        <form onSubmit={handleLogin}>
          <label>
            <select>
              <option>Select your Branch...</option>
            </select>
          </label>
          <label>
            Email
            <input type="email" placeholder="admin@mail.com" required />
          </label>
          <label>
            Password
            <input type="password" placeholder="8 Characters" required />
          </label>
          <div className="form-options">
            <label>
              <input type="checkbox" />
              Keep me logged in
            </label>
            <a href="#">Forget password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="login-branding">
        <div className="branding-logo">
          <img src={require("../assets/Logo.png")} alt="Logo" className="logo-image" />
        </div>
        <h2>NAME</h2>
      </div>
    </div>
  );
}

export default LoginPage;
