import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail }) => {
  return (
    <>
      <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="button c-button">LEARN MORE</button>
      </div>
    </>
  );
};

export default Card;
