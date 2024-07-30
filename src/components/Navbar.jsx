import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-scroll";

const Navbar = () => {
  const NavSection = styled.div`
    z-index: 1;
    position: sticky;
    top: 0;
    left: 0;
    li {
      margin: 0px 10px;
    }
    a {
      cursor: pointer;
    }
  `;
  return (
    <NavSection>
      <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bolder">
            Yummy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navToggle"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navToggle">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="hero" className="nav-link" smooth={true} duration={0}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  className="nav-link"
                  smooth={true}
                  duration={0}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="menu" className="nav-link" smooth={true} duration={0}>
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="events"
                  className="nav-link"
                  smooth={true}
                  duration={0}
                >
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="chefs"
                  className="nav-link"
                  smooth={true}
                  duration={0}
                >
                  Chefs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="gallery"
                  className="nav-link"
                  smooth={true}
                  duration={0}
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#" className="dropdown-item">
                      Dropdown 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Dropdown 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Dropdown 3
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-item dropdown-toggle">
                      Dropdown 4
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#" className="dropdown-item">
                          Deep dropdown 1
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item">
                          Deep dropdown 1
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item">
                          Deep dropdown 1
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  className="nav-link"
                  smooth={true}
                  duration={0}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <a href="#" className="btn btn-danger">
              Book a Table
            </a>
          </div>
        </div>
      </nav>
    </NavSection>
  );
};
export default Navbar;
