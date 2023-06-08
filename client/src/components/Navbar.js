import React from "react";
import "./Navbar.css";
import logo from "../assets/Logo.PNG";
const Navbar = () => {
  const currentUser = localStorage.getItem("currentUser");
  const user = currentUser ? JSON.parse(currentUser).name : null;
  async function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  }
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div className="navbar-middle">
        <a href="/Home">Home</a>
        <a href="/About">About</a>
        <a href="/Contact">Contact</a>
      </div>

      {currentUser ? (
        <div class="navbar-right">
          <ul>
            <li class="dropdown">
              <a>&#9662;Menu</a>
              <div class="dropdown-content">
                <a href="#">Orders</a>
                <a href="/profile">Profile</a>
                <a href="#" onClick={logout}>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-right">
          <a href="/Login">Login</a>
          <a href="/Signup">Signup</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
