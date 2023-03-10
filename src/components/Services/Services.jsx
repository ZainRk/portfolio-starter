import React from "react";
import "./services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import FolaCV from "../../img/FolaCV.pdf";

const Services = () => {
  return (
    <div className="services">
      <div className="leftdiv">
        <span> My Awesome </span>
        <span>Services</span>

        <span>
          Designing and implementing the user interface of a website or
          application, this includes creating layouts, designing buttons and
          other interface elements, and ensuring that the interface is easy to
          use and navigate.
        </span>
        <span>
          Writing the HTML and CSS code that makes up the visual design of a
          website or application, this includes creating responsive designs that
          work well on different screen sizes and devices.
        </span>
        <span>
          Write JavaScript code to add interactivity and dynamic behavior to a
          website or application, this can include things like animations, form
          validation, and data visualization.
        </span>
        <span>
          Ensure that websites and applications work correctly across different
          web browsers, such as Chrome, Firefox, and Safari.
        </span>
        <span>
          Optimize websites and applications for speed and performance, this can
          include things like optimizing images, minimizing HTTP requests, and
          reducing page load times.
        </span>
        <span>
          Ensure that websites and applications are accessible to users with
          disabilities, such as those who are visually impaired or have limited
          mobility
        </span>
        <a href={FolaCV} download>
          <button className="button s-button">Download my CV</button>
        </a>
      </div>
      <div className="rightdiv">
        <div style={{ left: "18rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            details={"Canva, Figma, sketch"}
          />
        </div>
        <div style={{ left: "4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Frontend"}
            details={"Html, CSS,Bootstrap, JavaScript, React, Redux"}
          />
        </div>
        <div style={{ top: "16rem", left: "4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Backend"}
            details={"node.js, express.js, MongoDB, Postman,"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
