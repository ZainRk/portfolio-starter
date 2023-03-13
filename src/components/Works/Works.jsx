import React from "react";
import "./works.css";
import Upwork from "../../img/Upwork.png";
import amazon from "../../img/amazon.png";
import fiverr from "../../img/fiverr.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Works = () => {
  return (
    <div className="works">
      <div className="leftdiv">
        <span> Works for all these </span>
        <span>Brands & Clients</span>

        <span>
          Designing and implementing the user interface of a website or
          application, this includes creating layouts, designing buttons and
          other interface elements, and ensuring that the interface is easy to
          use and navigate.
        </span>
        <a>
          <button className="button s-button">Hire Me</button>
        </a>
      </div>
      <div className="works-right-div">
        <div className="w-main-circle">
          <div className="w-sec-circle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-sec-circle">
            <img src={fiverr} alt="" />
          </div>
          <div className="w-sec-circle">
            <img src={amazon} alt="" />
          </div>
          <div className="w-sec-circle">
            <img src={Shopify} alt="" />
          </div>

          <div className="w-sec-circle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
