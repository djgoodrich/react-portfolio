import React from "react";
import "./social-media.css";

const SocialMedia = () => {
  return (
    <div className="social-media-align">
      <a href="https://github.com/djgoodrich"><img className="social-media-icon" src='https://res.cloudinary.com/davidgoodrich-io/image/upload/v1521810815/github.png' alt="github link" /></a>
      <a href="https://twitter.com/djgoodrich"><img className="social-media-icon" src='https://res.cloudinary.com/davidgoodrich-io/image/upload/v1521810759/twitter.png' alt="github link" /></a>
      <a href="https://linkedin.com/in/david-j-goodrich"><img className="social-media-icon" src='https://res.cloudinary.com/davidgoodrich-io/image/upload/v1521810806/linkedin.png' alt="github link" /></a>
    </div>
  );
};
export default SocialMedia;
