import React from "react";
import "./Float.css";
const FloatingDiv = ({ image, txt1, txt2 }) => {
  return (
    <div>
      <div className="floatingdiv">
        <img src={image} alt="wow" />
        <span>
          {txt1}
          <br />
          {txt2}
        </span>
      </div>
    </div>
  );
};

export default FloatingDiv;
