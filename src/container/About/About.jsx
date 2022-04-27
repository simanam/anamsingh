import React from "react";

import { Timelines } from "../../components";
import { Appwrap } from "../../wrapper";

import "./About.scss";

const About = () => {
  return (
    <>
      <div id="about" className="app__about">
        <div className="main-section">
          <div className="about-heading">
            <p>
              <b>About me</b>
            </p>
          </div>

          <div className="content-section">
            <p>
              Hello! My name is Aman and I enjoy creating things that live on
              the internet. Back in 2015 with zero coding skills, I managed to
              create iOS game because I couldn't find someone to bring my idea
              to life — sparking my interest in app development!
            </p>
            <p>
              From the past three years, I am working as Full Stack Developer at
              <b> USPS</b>, with focus in Front-End. At USPS I had the
              oppurtunity to work from legacy applications to many new projects.
            </p>
            <p>
              I believe in continuous learning. Therefore beside working on full
              time job I like to work on personal projects.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>

            <ul className="list-section">
              <li>JavaScript (ES6+)</li>
              <li>HTML5/SCSS</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>Figma</li>
              <li>Webflow</li>
              <li>Notion</li>
            </ul>
          </div>
        </div>
        <div className="timeline-section">
          <Timelines />
        </div>
      </div>
    </>
  );
};

export default About;
