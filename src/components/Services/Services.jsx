import React from "react";

import "./Services.css";

import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";

const Services = () => {
  return (
    <>
      <div className="services">
        {/* left side */}
        <div className="awesome">
          <span>My Awesome</span>
          <span>Services</span>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
            est. <br />
            Lorem ipsum dolor sit amet.
          </span>
          <a
            href="https://drive.google.com/file/d/1Dbf29spcqiDHvjrT3YhFtezLkUOrxTIS/view?usp=share_link"
            target="blank"
            download
          >
            <button className="button s-button">Download Resume</button>
          </a>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF11FF94" }}
          ></div>
        </div>
        {/* right side */}
        <div className="cards">
          <div style={{ left: "14rem" }}>
            <Card
              emoji={HeartEmoji}
              heading={"Design"}
              detail={
                "Figma,Online Photshop Editor, BablePhoto Art,Adobe,Adobe-XD"
              }
            />
          </div>
          <div style={{ top: "12rem", left: "-4rem" }}>
            <Card
              emoji={Glasses}
              heading={"Softawre Engineer"}
              detail={
                "HTML5,CSS3,JavaScript,ExpressJs MongoBD,NodeJs,MySQL,Firebase, Python,Java,Machine Learing,Algorithm,Data structure"
              }
            />
          </div>
          <div style={{ top: "19rem", left: "19rem" }}>
            <Card
              emoji={Humble}
              heading={"UI/US"}
              detail={"Stet diam sea dolores dolor justo. Dolores clita no et."}
            />
          </div>
          <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Services;
