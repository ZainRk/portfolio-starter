import React from "react";
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import "./Intro.css";

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimogi from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span>Hy!! This is</span>
            <span>Ujjal Roy</span>
            <span>
              Software Engineer with experience in managing a team and making
              critical decisions. Passionate about Data Science and algorithms
              and interested in a full-time position in Software Development.
            </span>
          </div>
          <button className="button i-button">Hire Me</button>
          <div className="i-icon">
            <a href="https://github.com/Ujjal-ENG/Ujjal-ENG" target="blank">
              <FaGithub className="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/ujjal-kumar-roy-9385a71a7/"
              target="blank"
            >
              <FaLinkedinIn className="linkedIn" />
            </a>
            <a href="https://www.facebook.com/ujjal.roy.7862" target="blank">
              <FaFacebook className="facebook" />
            </a>
          </div>
        </div>
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />
          <img src={glassesimogi} alt="" />
          <div style={{ top: "-4%", left: "68%" }}>
            <FloatingDiv img={Crown} txt1="Softawre" txt2="Developer" />
          </div>
          <div style={{ top: "18rem", left: "1rem" }}>
            <FloatingDiv img={thumbup} txt1="Best Design" txt2="Award" />
          </div>
          {/* blur divs */}
          <div
            className="blur"
            style={{ background: "rgba(238 210 255" }}
          ></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Intro;
