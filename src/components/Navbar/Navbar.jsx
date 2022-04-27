import React, { useState } from "react";

// import { useCycle } from "framer-motion";

import { images } from "../../constants";
import resumePDF from "../../assests/resume.pdf";

import { CgFileDocument } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./Navbar.scss";

// const sidebar = {
//   open: (height = 1000) => ({
//     clipPath: `circle(${height * 2 + 200}px at 190px 33px)`,
//     transition: {
//       type: "spring",
//       stiffness: 20,
//       restDelta: 2,
//     },
//   }),
//   closed: {
//     clipPath: "circle(30px at 190px 33px)",
//     transition: {
//       delay: 0.5,
//       type: "spring",
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };
// const variants = {
//   open: {
//     transition: { staggerChildren: 0.07, delayChildren: 0.2 },
//   },
//   closed: {
//     transition: { staggerChildren: 0.05, staggerDirection: -1 },
//   },
// };

// const variantsTwo = {
//   open: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       y: { stiffness: 1000, velocity: -100 },
//     },
//   },
//   closed: {
//     y: 50,
//     opacity: 0,
//     transition: {
//       y: { stiffness: 1000 },
//     },
//   },
// };

const Navbar = () => {
  // const [toggle, setToggle] = useState(false);
  const [activeFilter, setActiveFilter] = useState("home");
  // const [isOpen, toggleOpen] = useCycle(false, true);
  // const containerRef = useRef(null);
  // const { height } = useDimensions(containerRef);
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
