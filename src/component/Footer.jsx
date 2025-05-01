import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* About */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-uppercase">VishnuTravel</h5>
            <p className="small">
              Explore the world with VishnuTravel. We offer affordable packages, unforgettable
              experiences, and top-notch service to make your journey memorable.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white">
                <FaInstagram />
              </a>
              <a href="#" className="text-white">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#destinations" className="text-white text-decoration-none">Destinations</a></li>
              <li><a href="#packages" className="text-white text-decoration-none">Packages</a></li>
              <li><a href="#about" className="text-white text-decoration-none">About</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-uppercase">Contact Us</h5>
            <p className="small">
              <FaMapMarkerAlt className="me-2" />
              B-35 Attrey Farm Gujar Ghati Near Jalmahal,Jaipur
            </p>
            <p className="small">
              <FaPhoneAlt className="me-2" />
              +91 94143 59539
            </p>
            <p className="small">
              <FaEnvelope className="me-2" />
              info@vishnutravel.com
            </p>
          </div>
        </div>

        <hr className="border-light" />

        {/* Bottom Bar */}
        <div className="text-center">
          <p className="mb-0 small">
            &copy; {new Date().getFullYear()} VishnuTravel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
