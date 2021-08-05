import React, {Component} from 'react';
import './GetClock.css';
import { HashRouter, Route } from "react-router-dom";
import {Link} from "react-router-dom"; 
import axios from "axios";
import PropTypes from 'prop-types';


class GetClock extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          date : new Date(),
      };
  }
  componentDidMount() {
      this.timer = setInterval(
          () => this.tick(),
          1000
      );
  }
  componentWillUnmount() {
      clearInterval(this.timerID);
  }
  tick() {
      this.setState(
          {date : new Date()},
      )
  }
  render() {
      return (
        <div className="present_time_clock">
          {this.state.date.getHours()}:{this.state.date.getMinutes()}:{this.state.date.getSeconds()}
        </div>
      );
    }
  }

export default GetClock;

