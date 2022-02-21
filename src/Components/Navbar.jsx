import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
import SignMeOut from "./SignMeOut";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid- nav_bg">
        <div className="row">
          <div className="mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                RD's Venture
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        to="/home"
                        style={{ textDecoration: "none" }}
                        className="nav-link"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/service"
                        style={{ textDecoration: "none" }}
                        className="nav-link"
                      >
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/contact"
                        style={{ textDecoration: "none" }}
                        className="nav-link"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/about"
                        style={{ textDecoration: "none" }}
                        className="nav-link"
                      >
                        About Us
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/"
                        style={{ textDecorationLine: "underline" }}
                        className="nav-link"
                        onClick={SignMeOut}
                      >
                        Sign Out ({localStorage.getItem("Name")})
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
