import React from "react";
import "./card.css";

const Card = ({ emoji, heading, details }) => {
  return (
    <div className="card">
      <div style={{ left: "14rem" }}>
        <img src={emoji} alt="" />
        <br/>
        <span>{heading}</span><br/>
        <span>{details}</span><br/>
        <button className="c-button">Lern more</button>
      </div>
    </div>
  );
};

export default Card;
