import React from 'react';
import {Link} from "react-router-dom"; 
import './Navigation.css';
import axios from "axios";

function Navigation(){
  return (
  <div className="link_to_home">
    <Link to="/">Home!</Link> 
  </div>
  );
}

export default Navigation;