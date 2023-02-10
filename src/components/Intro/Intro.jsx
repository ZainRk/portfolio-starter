import React from "react";
import "./intro.css";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import Linkedin from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span className="hi">Hy, I Am </span>
          <span className="name">Karan Kumar </span>
          <span>
            Frontend Developer with good knowledge in web designing and
            development, producing the Quality work.
          </span>
        </div>
        <div className="i-icons">
          <a href="https://github.com/Anshkaran7" target="_blank">
            <img src={Github} />
          </a>
          <a href="https://www.instagram.com/anshkaran7/" target="_blank">
            <img src={Instagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/karan-kumar-416321239/"
            target="_blank"
          >
            <img src={Linkedin} />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} />
        <img src={Vector2} />
        <img src={boy} />
        <img src={glassesimoji} />
        <div style={{ top: "60%", left: "65%" }}>
          <FloatingDiv image={Crown} txt1="Frontend" txt2="Web Developer" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
