import React from 'react';
import './works.css';

const Works = () => {
  return (
    <div className="works">
      <div className="leftdiv">
        <span> Works for all these </span>
        <span>Brands & Clients</span>

        <span>
          Designing and implementing the user interface of a website or
          application, this includes creating layouts, designing buttons and
          other interface elements, and ensuring that the interface is easy to
          use and navigate.
        </span>
        <a href={FolaCV} download>
          <button className="button s-button">Download my CV</button>
        </a>

        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
    </div>
  );
}

export default Works
