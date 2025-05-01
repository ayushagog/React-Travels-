import React from 'react';
import {
  FaHome,
  FaMapMarkedAlt,
  FaBoxOpen,
  FaInfoCircle,
  FaPhoneAlt,
  FaPlaneDeparture,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container-fluid px-3">
          {/* Logo */}
          <Link className="navbar-brand fw-bold text-primary" to="#">
            VishnuTravel
          </Link>

          {/* Toggler for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Nav */}
          <div className="collapse navbar-collapse justify-content-end d-none d-lg-flex">
            <ul className="navbar-nav w-100 d-flex text-center">
              <li className="nav-item flex-fill">
                <Link className="nav-link" to="/">
                  <FaHome className="me-1" /> Home
                </Link>
              </li>
              <li className="nav-item flex-fill">
                <Link className="nav-link" to="/destinations">
                  <FaMapMarkedAlt className="me-1" /> Destinations
                </Link>
              </li>
              <li className="nav-item flex-fill">
                <Link className="nav-link" to="/packages">
                  <FaBoxOpen className="me-1" /> Packages
                </Link>
              </li>
              <li className="nav-item flex-fill">
                <Link className="nav-link" to="/about">
                  <FaInfoCircle className="me-1" /> About
                </Link>
              </li>
              <li className="nav-item flex-fill">
                <Link className="nav-link" to="/contact">
                  <FaPhoneAlt className="me-1" /> Contact
                </Link>
              </li>
              <li className="nav-item flex-fill">
                <Link className="btn btn-primary w-100" to="#book">
                  <FaPlaneDeparture className="me-1" /> Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Offcanvas */}
          <div
            className="offcanvas offcanvas-start d-lg-none"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-primary fw-bold mx-auto" id="offcanvasNavbarLabel">
                VishnuTravel
              </h5>
              <button
                type="button"
                className="btn-close position-absolute end-0 me-3"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav text-start">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <FaHome className="me-2" /> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/destinations">
                    <FaMapMarkedAlt className="me-2" /> Destinations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/packages">
                    <FaBoxOpen className="me-2" /> Packages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    <FaInfoCircle className="me-2" /> About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    <FaPhoneAlt className="me-2" /> Contact
                  </Link>
                </li>
                <li className="nav-item mt-3">
                  <Link className="btn btn-primary w-100" to="#book">
                    <FaPlaneDeparture className="me-2" /> Book Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
