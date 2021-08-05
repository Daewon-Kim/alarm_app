import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import five from "./five";
import ten from "./ten";
import thirty from "./thirty";
import axios from "axios";
import {Link} from "react-router-dom"; 
import './Home.css';

//여기다가 홈 화면
function Home(){
  return (
    <div className="home_section">
      <div className="this_is_home"> This is Home </div>
      <HashRouter>
        <Route path="/five" component={five} />
        <Route path="/ten" component={ten} />
        <Route path="/thirty" component={thirty} />
      </HashRouter>
      <div className="btns">
        <Link to="/five">
          <button className="first_btns">5초</button>
        </Link>
        <Link to="/ten">
          <button className="second_btns">10초</button>
        </Link>
        <Link to="/thirty">
          <button className="third_btns">30초</button>
        </Link>
      </div>
    </div>  
  );
}
export default Home;