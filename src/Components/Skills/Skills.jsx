import React from 'react'
import './Skills.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card'
import Resume from './resume.pdf';
const Skills = () => {
  return (
    <div className='skills'>
     {/* left side */}
      <div className='awesome'>
        <span>My Skills</span>
        <span>Hello</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
       
          <button className="button s-button">Download CV</button>
       
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      {/* right side */}
      
      </div>
      <div className='cards'>
        <div style={{left:'14rem'}}>
         <Card
            emoji={HeartEmoji}
            heading={"Web Development"}
            detail={"React, HTML, Tailwind, Javascript, NextJS"}
          />
        </div>
        <div style={{top:'12rem' ,left:'-4rem'}}>
         <Card
            emoji={Glasses}
            heading={"Virtual Tour"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </div>
        <div style={{top:'19rem',left:'25rem'}}>
         <Card
            emoji={ Humble}
            heading={"Mobile Development"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
        
      </div>
    </div>
  )
}

export default Skills