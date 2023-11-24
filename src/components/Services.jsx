import React from "react";
import "./services.css";
import HeartEmoji from "../img/heartemoji.png";
import Glasses from "../img/glasses.png";
import Humble from "../img/humble.png";
import Card from "./Card";
import Resume from "./Resume.pdf";

const Services = () => {
  return (
    <div className="services">
      {/* left side manipulation */}

      <div className="awesome">
        <span>MY awesome</span>
        <span>services</span>
        <span>
          Lorem ipsume is simpley dummy text of printing of printing Loprem
          <br />
          ipsume is rsimpley dummy text of printing
        </span>
        <br />
        <a href={Resume} download>
          <button className="button s-button">Download Cv</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side maniplation */}
      <div className="cards">
        <div style={{ left: "43rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            details={"Figma,Sketch,    Photoshop"}
          />
        </div>
        {/* second card */}
        <div style={{ top: "50rem", left: "22rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            details={"Html,Css,Javascript,   React"}
          />
        </div>
        {/* 3rd card */}
        <div style={{ top: "60rem", left: "40rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            details={
              "Lorem ipsum dummy paage usually use in section where is can done to my web pages "
            }
          />
        </div>
        <div
          className="blur s-blur1"
          style={{ background: "rgb(238 210 255)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
