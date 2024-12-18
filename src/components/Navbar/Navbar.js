import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleLoginClick = () => {
    window.location.href = "login.html"; // Redirect to login page
  };

  const handleSignupClick = () => {
    window.location.href = "signup.html"; // Redirect to signup page
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          Aletheia.ai
        </a>
        <div className="navbar-buttons">
          <button className="navbar-login" onClick={handleLoginClick}>
            Login
          </button>
          <button className="navbar-signup" onClick={handleSignupClick}>
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
