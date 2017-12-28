import React from "react";
import GithubIcon from "./images/github.png";
import TwitterIcon from "./images/twitter.png";
import LinkedInIcon from "./images/linkedin.png";
import "./social-media.css";

const SocialMedia = () => {
  return (
    <div className="social-media-align">
      <a href="https://github.com/djgoodrich"><img className="social-media-icon" src={GithubIcon} alt="github link" /></a>
      <a href="https://twitter.com/djgoodrich"><img className="social-media-icon" src={TwitterIcon} alt="github link" /></a>
      <a href="https://linkedin.com/in/david-j-goodrich"><img className="social-media-icon" src={LinkedInIcon} alt="github link" /></a>
    </div>
  );
};
export default SocialMedia;
