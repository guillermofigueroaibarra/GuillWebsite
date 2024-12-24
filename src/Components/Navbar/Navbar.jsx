import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon">&#9776;</span>
      </button>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li className="navbar-item">
          <a href="#about" className="navbar-link">
            About Me
          </a>
        </li>
        <li className="navbar-item">
          <a href="#work" className="navbar-link">
            Experience
          </a>
        </li>
        <li className="navbar-item">
          <a href="#projects" className="navbar-link">
            Projects
          </a>
        </li>

        <li className="navbar-item">
          <a href="#contact" className="navbar-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
