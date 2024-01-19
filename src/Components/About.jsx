import React, { useState } from "react";
import "./About.css";
const About = () => {
  const [mainSkill, setMainSkill] = useState(true);
  const [awards, setAwards] = useState(false);
  const [experince, setExperince] = useState(false);
  const [eduation, setEduation] = useState(false);
  function handleHideShowMenu(e) {
    if (e.target.innerHTML === "Main Skills") {
      setMainSkill(true);
      setAwards(false);
      setEduation(false);
      setExperince(false);
    } else if (e.target.innerHTML === "Awards") {
      setMainSkill(false);
      setAwards(true);
      setEduation(false);
      setExperince(false);
    } else if (e.target.innerHTML === "Experince") {
      setMainSkill(false);
      setAwards(false);
      setEduation(false);
      setExperince(true);
    } else if (e.target.innerHTML === "Education &amp; Certification") {
      setMainSkill(false);
      setAwards(false);
      setEduation(true);
      setExperince(false);
    }
  }
  return (
    <>
      <div className="about-me-main-container" id="about">
        <div className="about-container">
          <div className="about-image-container"></div>
          <div className="about-me-text-container">
            <h1>About Me</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered
              {/* {` <a href="#">alteration</a>`} */}
              in some form, by injected humour, or randomised words which dont
              look even slightly believable. If you are going to use a passage
              of Lorem Ipsum,
            </p>
            <br />
            <ul className="skill-menu" onClick={handleHideShowMenu}>
              <li>
                <span>Main Skills</span>
              </li>
              <li>
                <span>Awards</span>
              </li>
              <li>
                <span>Experince</span>
              </li>
              <li>
                <span>Education & Certification</span>
              </li>
            </ul>
            <br />
            <div className="skill-data-container">
              {mainSkill ? (
                <ul>
                  <a href="...">User experience design - UI/UX</a>
                  <li>Delight the user and make it work.</li>
                  <a href="...">Web and user interface design - Development</a>
                  <li>Websites, web experiences, ... </li>
                  <a href="...">Interaction design - Animation</a>
                  <li>I like to move it move it.</li>
                </ul>
              ) : null}
              {awards ? (
                <ul>
                  <a href="...">Awwwards.com - Winner</a>
                  <li>2019 - 2020</li>
                  <a href="...">CSS Design Awards - Winner</a>
                  <li>2017 - 2018</li>
                  <a href="...">Design nominees - site of the day</a>
                  <li>2013- 2014</li>
                </ul>
              ) : null}
              {experince ? (
                <ul>
                  <a href="...">Sr. Front-end Engineer - Google</a>
                  <li>2018 - Current</li>
                  <a href="...">Front-end Engineer - Microsoft</a>
                  <li>2017 - 2018 </li>
                  <a href="...">Software Engineer - Alibaba</a>
                  <li>2013- 2014</li>
                </ul>
              ) : null}
              {eduation ? (
                <ul>
                  <a href="...">BSc In CSE - ABC University, Los Angeles, CA</a>
                  <li>2010</li>
                  <a href="...">
                    Diploma in Computer Science - Gamma Technical Institute
                  </a>
                  <li>2009 </li>
                  <a href="...">
                    Graphic Designer - ABC Institute, Los Angeles, CA
                  </a>
                  <li>2007</li>
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
