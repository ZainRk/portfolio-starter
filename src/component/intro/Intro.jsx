import {React,useContext} from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../floatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";



const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme?.state?.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color: darkMode?"#fff":""}}>Hy! I Am</span>
          <span>Minky Chu</span>
          <span style={{color: darkMode?"#fff":""}}>I'm developer Frontend. I have more than 2 years experience with React.js, Next.js and Vue.js.</span>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button i-button">Hire me</button>
        </Link>

        <div className="i-icon">
           <a href="https://github.com/MinKyChu2802" target="_blank" rel="noreferrer"> 
            <img src={Github} alt="" />
          </a>
          {/* <a href="#" target="_blank" rel="noreferrer"> */}
            {/* <img src={Linkedin} alt="" /> */}
          {/* </a> */}
           <a href="https://www.instagram.com/mnhquy2802" target="_blank" rel="noreferrer"> 
            <img src={Instagram} alt="" />
          </a> 
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
