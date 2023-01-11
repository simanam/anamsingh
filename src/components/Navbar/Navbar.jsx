import React, { useState } from "react";

import { images } from "../../constants";
import resumePDF from "../../assests/resume.pdf";

import { CgFileDocument } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [activeFilter, setActiveFilter] = useState("home");

  const handleClassChange = (item) => {
    setActiveFilter(item);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/anamsingh">
          <img src={images.logo} alt="logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "projects", "contact"].map((item) => (
          <li
            key={`link-${item}`}
            onClick={() => handleClassChange(item)}
            className={`app__flex second-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="resume-section">
        <a href={resumePDF} target="__blank">
          <CgFileDocument />
          <p>Resume</p>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
