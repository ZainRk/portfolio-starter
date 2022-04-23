import React from 'react'
import './Intro.css'
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import boy2 from "../../img/boy2.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
const Intro = () => {
  return (
    <div className='Intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span>Kia Ora, I am </span>
                <span>Ronald Baruelo </span>
                <span>Experience on Virtual Tour , Frontend Development and Fullstack developement</span>
            </div>
            <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
        </div>
        <div className='i-right'>
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy2} alt="" />
        <img src={glassesimoji} alt="" />
        <div style = {{top:'-4%',left:'68%'}}>
        <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </div>
        <div style = {{top:'18rem',left:'0rem'}}>
        <FloatinDiv img={thumbup} text1="Virtual" text2="Tour" />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
        </div>
        
    </div>
  )
}

export default Intro