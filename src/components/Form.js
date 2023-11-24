import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div
             className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea type="message" className="user" placeholder="message" />
          <input type="submit" value="Send" className="button" />
          <div
            className="blur c-blur1"
            style={{ background: "var(--purpule)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Form;
