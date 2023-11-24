import React from "react";
import "./Work.css";
import upwork from "../img/Upwork.png";
import Fiverr from "../img/fiverr.png";
import Amazon from "../img/amazon.png";
import Shopify from "../img/Shopify.png";
import FaceBook from "../img/Facebook.png";
const Work = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>Work for all these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum is simpsley text of printing of prittings Lorem
          <br />
          ipsum is simpley dummy text of printing
          <br />
          ipsum is simpley dummy text of printing
        </span>
        <br />
      <br />
      <br />

      <button className="button i-button">Hire Me</button>

      </div>
     
      
     
      <div
        className="blur s-blur1"style={{ background: "rgb(238 210 255)" }}></div>
       
{/* right side div */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={FaceBook} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
        </div>

        <div className="w-backc bluec"></div>
        <div className="w-backc yellowc"></div>
      </div>
      {/* parent */}
    </div>
  );
};

export default Work;
