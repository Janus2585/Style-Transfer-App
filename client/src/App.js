import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Intro from './components/Intro'
import HowItWorks from './components/HowItWorks'
import SampleDeepStyles from './components/SampleDeepStyles'
import DeepStyleYourPic from './components/DeepStyleYourPic'
import UserProfile from './components/UserProfile'
import Footer from './components/Footer'
import api from './utils/api.js'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  
  render() {
  	
    return (
      <div className="container">
        <BrowserRouter>
          <div className="App">
            <Header/>
            <Route exact path="/" component={Intro} />
            <Route exact path="/" component={HowItWorks} />
            <Route exact path="/" component={SampleDeepStyles} />
            <h1>Styles</h1>
            <Route exact path="/" component={DeepStyleYourPic} />
            <Route exact path="/profile" component={UserProfile} />
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
