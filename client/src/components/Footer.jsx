import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 px-4 w-100">
      <div className="container d-flex flex-column justify-content-center align-items-center text-center">
        <h5 className="mb-2">
          &copy; {new Date().getFullYear()} Techinfoyt. All Rights Reserved.
        </h5>
        <nav className="d-flex flex-wrap justify-content-center align-items-center gap-2 small">
          <Link to="/about" className="text-light text-decoration-none hover-effect">About</Link>
          <span>|</span>
          <Link to="/contact" className="text-light text-decoration-none hover-effect">Contact</Link>
          <span>|</span>
          <Link to="/policy" className="text-light text-decoration-none hover-effect">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
