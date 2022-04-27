import React from "react";
import "./Footer.scss";

import { SocialMedia } from "../../components";
const Footer = () => {
  return (
    <>
      <div id="contact" className="app__contact">
        <div className="footer-main-section">
          <div className="contact-heading">
            <p>
              <b>Get in touch</b>
            </p>
          </div>

          <div className="footer-content-section">
            <p> I'm ready for the next move in my career.</p>
            <p>
              If you are looking for someone, readiness for design with
              technical expertise, then lets talk. Or if you have any questions
              in general, my inbox is always open.
            </p>
            <div className="contact-btn">
              <a href="mailto:aman1381singh@gmail.com" target="__blank">
                Say Hello
              </a>
            </div>
            <SocialMedia />
            <div className="copyright">
              <p className="p-text">@2022 3pencomic</p>
              {/* <p className="p-text">All right reserved</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
