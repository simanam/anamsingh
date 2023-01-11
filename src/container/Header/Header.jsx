import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { watchViewport } from "tornis";
import { ReactComponent as AmanSvg } from "../../assests/AmanSvg.svg";
import { ReactComponent as BackgroundSvg } from "../../assests/background.svg";
// import { Appwrap } from "../../wrapper";

import "./Header.scss";

const Header = () => {
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);

  useEffect(() => {
    const updateValues = ({ mouse, position }) => {
      if (mouse.changed) {
        // do something related to mouse position or velocity
      }
    };

    // bind the watch function
    // By default this will run the function as it is added to the watch list
    watchViewport(updateValues);
  });

  return (
    <div id="home" className="app__header app__flex">
      <motion.div className="backgroundSvg">
        <BackgroundSvg />
      </motion.div>
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-badge"
      >
        <div className="badge-cmp">
          <div className="title-name" style={{ marginLeft: 20 }}>
            <p>Hi, my</p>
            <p>
              name is <b>Aman.</b>
            </p>
          </div>
        </div>
        <div className="tagcmp app__flex">
          <div className="second-text" style={{ marginLeft: 20 }}>
            <p>
              I'm a <b>ux/ui engineer</b> from California
            </p>
          </div>
          <span className="page-header__scroll" aria-hidden="true">
            <span>
              <span>S</span> <span>c</span> <span>r</span> <span>o</span>
              <span>l</span> <span>l</span>
            </span>
          </span>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-svg"
      >
        <motion.div
          animate={{ y: [50, 0] }}
          transition={{ type: "spring", bounce: 0.75 }}
          className="amanSvg"
          // layout
        >
          <AmanSvg />
        </motion.div>
        {/* <SocialMedia /> */}
      </motion.div>
    </div>
  );
};

export default Header;
