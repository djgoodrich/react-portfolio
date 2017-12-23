import React from 'react';
import './intro.css';
import Modalpopup from '../Modal/modal';


const Intro = () => {
    
    return (
    <div className="introduction-header">
        <h1>David Goodrich, Web Developer</h1>
        
        <p className="header-text">I am a full stack web developer with a passion for Front End Development. 
            Some languages I frequently find myself using include HTML5, CSS3, JavaScript 
            (jQuery, React, Node.js), MongoDB and SQL.</p>
            <Modalpopup />
    </div>
    )
}

export default Intro;