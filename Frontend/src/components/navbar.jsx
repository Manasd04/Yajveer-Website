import React from "react";
import "../CSS/navbar.css";
import { Link } from "react-router";
export default function Navbar() {
      return (
        <>
        <nav className="navbar">
          <div className="navbar-left">
            <p>Become A Seller</p>
             <Link to="/aboutUs" style={{textDecoration : "none" , color : "white"}}><p>About Us</p></Link>
            <p>Free Delivery</p>
            <p>Returns Policy</p>
          </div>
          <div className="navbar-right">
            <div className="navbar-dropdown">
              <p>Help Center</p>
              <ul className="dropdown-menu">
                <li>
                  <i className="bi bi-headset"></i> Call Center
                </li>
                <li>
                  <i className="bi bi-chat-dots"></i> Live Chat
                </li>
              </ul>
            </div>
            <i className="bi bi-person-circle"></i>
            <Link to="/login">
            <button className="account-button">My Account</button>
            </Link>
          </div>
        </nav>
        </>
      );
}
