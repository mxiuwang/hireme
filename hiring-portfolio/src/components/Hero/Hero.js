import React from "react";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="hero-container">
      <img src="/Images/mountains.jpg" alt="background-image" />
      <div className="title-container">
        <h1>
          HI I'M
          <br />
          MICHELLE
        </h1>
        <p>A small website on why you should hire me</p>
      </div>
    </div>
  );
};
