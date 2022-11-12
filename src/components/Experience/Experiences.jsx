import React from "react";
import "./Experiences.css";

const Experiences = ({ year, num, exp }) => {
  return (
    <>
      <div className="experience">
        <div className="achievement">
          <div className="circle">{num}</div>
          <span>{year }</span>
          <span>{exp}</span>
        </div>
      </div>
    </>
  );
};

export default Experiences;
