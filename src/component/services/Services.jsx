import React from "react";
import "./Services.css";
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'


const Services = () => {
  return (
    <div className="services">
        {/** left side */}
      <div className="awesome">
          <span>My Awesome</span>
          <span>Services</span>
          <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni doloremque temporibus nam atque expedita numquam commodi accusantium, architecto itaque et exercitationem sequi nostrum corrupti blanditiis dicta reprehenderit, cupiditate explicabo ut?
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          </span>

          <button className="button s-button">Dowload CV</button>
          <div className="blur s-blur1 s-blur-background1"></div>
      </div>
      {/** right side */}
      <div className="cards">
          hello
      </div>
    </div>
  );
};

export default Services;
