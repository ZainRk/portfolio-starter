import React from "react";
import "./intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import newfoli from "../../img/newfoli.jpg";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hello! I Am </span>
          <span>Folahan Mosunmola </span>
          <span>
            Frontend Developer with high level of Experience in web designing
            and development, producing the Quality work.
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/Seunfola">
            <img src={Github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/folahan-m-37b48bb2/">
            <img src={LinkedIn} alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/clanbreed/">
            <img src={instagram} alt="instgram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={newfoli} alt="" style={{ height: "650px", width: "650px" }} />
        
      </div>
    </div>
  );
};

export default Intro;
