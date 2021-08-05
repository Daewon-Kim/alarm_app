import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home';
import five from "./five";
import ten from "./ten";
import thirty from "./thirty";
import GetClock from './GetClock';
import axios from "axios";

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/" exact={true} component={GetClock} />
      <Route path="/five" component={five} />    
      <Route path="/ten" component={ten} />  
      <Route path="/thirty" component={thirty} />    
    </HashRouter>
  )
}


export default App;