import {React, useContext} from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../card/Card";
import { motion } from "framer-motion";
import CV from './CV.pdf'
import { themeContext } from "../../Context";

 
const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme?.state?.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services">
      {/** left side */}
      <div className="awesome">
        <span style={{color:darkMode?"#fff":""}}>My Awesome</span>
        <span>Services</span>
        <span style={{color:darkMode?"#fff":""}}>
          {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
          doloremque temporibus nam atque expedita */}
          <br />
          {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. */}
        </span>
        <a href={CV} download>
          <button className="button s-button">Dowload CV</button>
        </a>
        <div className="blur s-blur1 s-blur-background1"></div>
      </div>
      {/** right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "30rem" }}
          whileInView={{ left: "25rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "10rem", top: "12rem" }}
          whileInView={{ left: "10rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "27rem" }}
          whileInView={{ left: "30rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
