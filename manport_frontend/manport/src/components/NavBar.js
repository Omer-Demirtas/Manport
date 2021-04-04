import React from "react";
import {Link} from "react-router-dom";

let a = 0;

export default function NavBar() {
  return (
    <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand">
        ManPort {++a}
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link" >
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/management" className="nav-link" >
              Management
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/quicklinks" className="nav-link" >
              Quick Links
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/issues" className="nav-link" >
              Issues
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
