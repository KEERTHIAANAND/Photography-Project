import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Branch Login</h1>
        <p>Enter your email and password to log in!
        </p>
        <form>
          <label>
            <select>
              <option>Select your Branch...</option>
            </select>
          </label>
          <label>
            Email
            <input type="email" placeholder="mail@simmple.com" required />
          </label>
          <label>
            Password
            <input type="password" placeholder="Min. 8 characters" required />
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
