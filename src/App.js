import React, { Component } from 'react';
import './App.css';
import SocialMedia from './components/Social-media-icon/social-media';
import HeaderContainer from './components/Header-container/header-container';
import About from './components/About/about';
import Libraries from './components/Libraries/libraries';
import Portfolio from './components/Portfolio/portfolio';
import Footer from './components/Footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
       <SocialMedia />
      <About/>
      <Libraries />
      <Portfolio />
      <Footer />
      </div>
    );
  }
}

export default App;
