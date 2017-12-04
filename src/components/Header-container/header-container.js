import React from 'react';
import './header-container.css';
import Intro from '../../components/Intro/intro';

const HeaderContainer = () => {
    return (
    <div className="header-container">
        <div className="background"><Intro /></div>
    </div>
    )
}

export default HeaderContainer;