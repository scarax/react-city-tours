import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand mr-4" to="/">
        City Tours
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>
            Tours
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
