import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark ">
      <div className="container">
        <Link activeClass="active" to="intro" spy={true} smooth={true}>
          <div className="navbar-brand">
            <div
              className="logo"
              style={{ backgroundImage: `url('${logo}')` }}
            ></div>
            <h3>Casey Cares</h3>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#toggleMobileMenu"
          area-controls="toggleMobileMenu"
          area-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="toggleMobileMenu">
          <ul className="navbar-nav ms-auto text-center">
            <li>
              <Link
                className="nav-link"
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
