import React, { Component } from 'react';
import App from './App.js';
import LoginScreen from './Components/Login/LoginScreen';

class Main extends Component {
 
  render() {
      
    if (true) 
    {
      return (<App/>)
    } else {
      return(
        <LoginScreen />
      ) 
    }
  }
}

export default Main;
