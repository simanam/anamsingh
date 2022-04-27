import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/simanam" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/3pencomic/" target="_blank">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/amand-singh/" target="_blank">
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/Aman01591378" target="_blank">
          <BsTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
