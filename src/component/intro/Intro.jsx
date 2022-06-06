import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../floatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy? I Am</span>
          <span>Minky Chu</span>
          <span>Example</span>
        </div>

        <button className="button i-button">Hire me</button>

        <div className="i-icon">
          {/* <a href="#"> */}
            <img src={Github} alt="" />
          {/* </a> */}
          {/* <a href="#"> */}
            <img src={Linkedin} alt="" />
          {/* </a> */}
          {/* <a href="#"> */}
            <img src={Instagram} alt="" />
          {/* </a> */}
        </div>
      </div>

      <div className="i-right">
      <img src={Vector1} alt="" />
      <img src={Vector2} alt="" />
      <img src={boy} alt="" />
      <img src={glassesimoji} alt="" />

      <div className="i-FloatingDiv1">
          <FloatingDiv image={Crown} txtTop='Web' txtBottom='Devloper'/>
      </div>

      <div className="i-FloatingDiv2">
          <FloatingDiv image={thumbup} txtTop='Best Design' txtBottom='Award'/>
      </div>

      {/** blur div */}
      <div className="blur i-blur" ></div>
      <div className="blur i-blur-bottom" ></div>
      </div>
    </div>
  );
};

export default Intro;
