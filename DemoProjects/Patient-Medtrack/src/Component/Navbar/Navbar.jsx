import React, { useState } from "react";
import "./Navbar.css";
import Med_logo from "../Assets/images/logo-badge.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("");
  console.log(menu);

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 medtrack mb-md-0">
        <a
          href="/"
          className="d-inline-flex link-body-emphasis text-decoration-none"
        >
          <img src={Med_logo} alt="" />
          <h4>Medtrack</h4>
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li onClick={() => setMenu("Overview")}>
          <Link
            to="/"
            className={`nav-link px-2 ${
              menu === "Overview" ? "link-secondary" : null
            }`}
          >
            Overview
          </Link>
        </li>
        <li onClick={() => setMenu("Appointment")}>
          <Link
            to="/Appointment"
            className={`nav-link px-2 ${
              menu === "Appointment" ? "link-secondary" : null
            }`}
          >
            Appointment
          </Link>
        </li>
        <li onClick={() => setMenu("Hospital")}>
          <Link
            to="/Hospital"
            className={`nav-link px-2 ${
              menu === "Hospital" ? "link-secondary" : null
            }`}
          >
            Hospital
          </Link>
        </li>
        <li onClick={() => setMenu("Profile")}>
          <Link
            to="/Profile"
            className={`nav-link px-2 ${
              menu === "Profile" ? "link-secondary" : null
            }`}
          >
            Profile
          </Link>
        </li>
        <li onClick={() => setMenu("About")}>
          <a
            href="#"
            className={`nav-link px-2 ${
              menu === "About" ? "link-secondary" : null
            }`}
          >
            About
          </a>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">
          Login
        </button>
        <button type="button" className="btn btn-primary">
          Sign-up
        </button>
      </div>
    </header>
  );
};

export default Navbar;
