import React from "react";
import "./About.css";
import Card from "../Card/Card";
import WebD from '../../img/webD.jpg'
const About = () => {
  return (
    <div className="about">
      <div className="i-about ">
        <span>About</span>
        <span>
          Hi! I'm Karan. I am doing my Bachelors in Computer Science Engineering
          and currently in my second year of college. I have deep interest in
          Frontend Web Development and Programming.
        </span>
        <button className="button a-button">Download CV</button>
      </div>
      <div className="cards">
       <Card
       photo ={WebD}
       heading={'Frontend Developer'}
       detail ={"HTML5 | CSS3 | Bootstrap | Javascript | Tailwind CSS | React Js"}/>
      </div>
    </div>
  );
};

export default About;
