import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Works.scss";
import { data } from "./data";
import { FiGithub, FiFigma } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("UI/UX");
  const [animateCard, setAnimateCard] = useState({ x: 0, opacity: 1 });
  const [animateCard2, setAnimateCard2] = useState({ x: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState(data);
  const navigate = useNavigate();

  useEffect(() => {
    setFilterWork(data.filter((work) => work.tag.includes("UI/UX")));
  }, []);

  const handleWorkFilter = (item) => {
    console.log(item);
    setActiveFilter(item);
    setAnimateCard([{ x: 200, opacity: 0 }]);
    setAnimateCard2([{ x: -300, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ x: 0, opacity: 1 }]);
      setAnimateCard2([{ x: 0, opacity: 1 }]);
    }, 500);

    setFilterWork(data.filter((work) => work.tag.includes(item)));
  };

  return (
    <>
      <div id="projects" className="app__work">
        <div className="main-section">
          <div className="work-heading">
            <p>
              <b>Projects</b>
            </p>
          </div>
          <div className="app__Work-filter">
            {["UI/UX", "Web App"].map((item, index) => (
              <div
                key={index}
                onClick={() => handleWorkFilter(item)}
                className={`app__work-filter-item app__flex, p-text ${
                  activeFilter === item ? "item-active" : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          <motion.ul className="app__Work-portfolio">
            {filterWork.map((work, index) => (
              <li className="app__work-item app__flex" key={index}>
                <motion.div
                  animate={animateCard}
                  transition={{ duration: 0.5, delayChildren: 0.5 }}
                  className={`app__work-content ${
                    index % 2 == 1 ? "work-content-n" : ""
                  }`}
                >
                  <p className="work-tag">{work.tag}</p>

                  <h3 className="work-name">
                    <a href={work.caseLink} target="_blank">
                      {work.name}
                    </a>
                  </h3>

                  <div className="work-desc-box">
                    <p className="work-desc">{work.Description}</p>
                  </div>
                  <ul className="work-tech-box">
                    {work.techArray.map((item, index) => (
                      <li key={index} className="work-tech">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="work-links-box">
                    {work.tag == "UI/UX" ? (
                      <a href={work.gitLink} target="_blank">
                        <FiFigma />
                      </a>
                    ) : (
                      <>
                        <a href={work.gitLink} target="_blank">
                          <FiGithub />
                        </a>
                        <a href={work.weblink} target="_blank">
                          <BiLinkExternal />
                        </a>
                      </>
                    )}
                  </div>
                </motion.div>
                <motion.div
                  animate={animateCard2}
                  transition={{ duration: 0.5, delayChildren: 0.5 }}
                  className="app__work-image"
                >
                  <div
                    className="imag"
                    style={{
                      width: "100%",
                      height: "100%",
                      background: `url(${work.image})`,
                      backgroundSize: "cover",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      window.open(`${work.caseLink}`, "__blank");
                    }}
                  >
                    <div className="on-Image">
                      <p className="work-tags">{work.tag}</p>

                      <h3 className="work-names">
                        <a href={work.weblink}>{work.name}</a>
                      </h3>

                      <div className="work-desc-boxs">
                        <p className="work-desc">{work.Description}</p>
                      </div>
                      <ul className="work-tech-boxs">
                        {work.techArray.map((item, index) => (
                          <li key={index} className="work-tech">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="work-links-boxs">
                        {work.tag == "UI/UX" ? (
                          <a href={work.gitLink} target="_blank">
                            <FiFigma />
                          </a>
                        ) : (
                          <>
                            <a href={work.gitLink} target="_blank">
                              <FiGithub />
                            </a>
                            <a href={work.weblink} target="_blank">
                              <BiLinkExternal />
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </>
  );
};

export default Work;
