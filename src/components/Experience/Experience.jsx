import React from "react";

import "./Experience.css";

import Experiences from "./Experiences";

const Experience = () => {
  return (
    <>
      <div className="experiences">
        <Experiences num={"8+"} year={"years "} exp={"Experience"} />
        <Experiences num={"20+"} year={"completed "} exp={"projects"} />
        <Experiences
          num={"5+"}
          year={"companies "}
          exp={"Working Experiences"}
        />
      </div>
    </>
  );
};

export default Experience;
