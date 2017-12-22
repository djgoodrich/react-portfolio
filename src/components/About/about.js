import React from "react";
import "./about.css";
import browserImg from "./images/browser-4.svg";
import teamwork from "./images/teamwork-1.svg";
import problemsolver from "./images/man.svg";
const About = () => {
  return (
    <div className="text-center">
      <h2 className="text-center" id="about-header">
        Who Am I
      </h2>
      <div className="about-grid">
        <div className="box1">
        <img src={problemsolver} className="icon-size" alt="problem solver icon"/>
        <p className="text-center about-paragraph">
          Hi, I'm David and I love building beautiful, dynamic, responsive
          websites. Since my very first computer (Apple IIe), I have loved
          technology and with the advent of the web I have been able to use that
          passion to create beautiful websites.
        </p>
        </div>
        <div className="box2">
        <img src={teamwork} className="icon-size" alt="teamwork"/>
        <p className="text-center about-paragraph">
          I consider myself a great team player who is consistenly reliable, able to adapt quickly,
          contribute positively to the team, and can consider different points of view to accomplish a common goal.
        </p>
        </div>
        <div className="box3">
        <img src={browserImg} className="icon-size" alt="computer icon" />
        <p className="text-center about-paragraph">
          I am a quick analytical, learner who loves to solve complex problems to create
          amazing solutions.
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
