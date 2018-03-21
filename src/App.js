import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
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
      <LazyLoad height={200} offset={100} once>
      <Libraries />
      </LazyLoad>
      <LazyLoad height={200} offset={100} once>
      <Portfolio />
      </LazyLoad>
      <Footer email="djgoodrich15@gmail.com" />
      </div>
    );
  }
}

export default App;
