import React from "react";
import "./Navbar.css";
import pentacorelogo from "../../img/pentacorelogo.png";

const Navbar = () => {
  return (
    <div>
      <div className="topline"
        style={{
          background: '#D4D7DD',
          height: '2.9px',
          width: '160rem',
          marginTop: '50px',
        }}
      />
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-logo">
            <img src={pentacorelogo} alt="" />
          </div>
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>About Us</li>
              <li>Product & Services</li>
              <li>News</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="botline"
        style={{
          background: '#D4D7DD',
          width: '160rem',
          height: '2.9px',
        }}
      />
    </div>
  );
};

export default Navbar;
