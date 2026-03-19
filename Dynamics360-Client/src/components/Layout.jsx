import React from "react";
import { Link, NavLink } from "react-router";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="main-layout">
      <nav className="navbar-dynamics-v2026">
        <div className="nav-container">
          <Link to="/" className="nav-logo-dynamics">
            <img
              src="/images/logo.jpg"
              alt="Dynamics360"
              className="Dynamics360-dummy-logo-img"
            />
            <span className="Dynamics360-dummy-logo-text">Dynamics360</span>
          </Link>

          {/* Navigation Links */}
          <ul className="nav-menu">
            <li className="top-navigation-nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="top-navigation-nav-item">
              <NavLink to="/events" className="nav-link">
                Events
              </NavLink>
            </li>
            <li className="top-navigation-nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main-content-container">{children}</main>
    </div>
  );
};

export default Layout;
