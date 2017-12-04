import React from "react";
import GithubIcon from "./images/github48x48blackonwhite.png";
import TwitterIcon from "./images/twitter48x48blackonwhite.png";
import LinkedInIcon from "./images/linkedin48x48blackonwhite.png";
import "./social-media.css";

const SocialMedia = () => {
  return (
    <div className="social-media-align">
      <a href="https://github.com/djgoodrich"><img src={GithubIcon} alt="github link" /></a>
      <a href="https://twitter.com/djgoodrich"><img src={TwitterIcon} alt="github link" /></a>
      <a href="https://linkedin.com/in/david-j-goodrich"><img src={LinkedInIcon} alt="github link" /></a>
    </div>
  );
};
export default SocialMedia;
