import React, {Component} from 'react'
import GetClock from './GetClock';
import { HashRouter, Route } from "react-router-dom";
import './alarm.css';

class thirty extends Component{
  constructor(props){
  super(props)
  this.clickHandler=this.clickHandler.bind(this);
  this.state={
  timeOut:false,
  curSeconds: new Date().getSeconds(),
  isEnd: true
  }
  this.timerId = 0
  }
  //마운트 했을 때
  
  componentWillMount(){
  this.timerId = setInterval(e=>{
  this.tick()
  }, 1000)
  }
  
  //언마운트 했을 때
  componentWillUnmount(){
  clearInterval(this.timerId)
  }
  //매초 실행됩니다

  tick(){
  if(this.state.timeOut){
  const v = new Date().getSeconds()
  this.setState({curSeconds:v})
  }
  }

  //시작/중지 버튼을 클릭했을 때
  clickHandler(){
    this.setState({timeOut:true})
    if(this.state.timeOut){
      const fixedCurSeconds = this.state.curSeconds;
      console.log(fixedCurSeconds);
      setTimeout( () => {
        this.showClock(fixedCurSeconds);
        this.setState({isEnd:false});
      }, 30000
      )
    }
  };

  showClock(fixedCurSeconds){
    console.log("I'm in showClock", fixedCurSeconds);
    return true;
  };

  //화면에 보여주기(rendering)
  render(){
    const {isEnd} = this.state;
    return(
    <div>
      {isEnd ? (
        <div>
          <Route path="/thirty" exact={true} component={GetClock} />  
          <button className="thirty_btns" onClick={this.clickHandler}>Start</button>       
        </div>
        ):(
        <div className="time_up"> Time up! </div>
        )
      }
    </div>
    );
  }
}

export default thirty;
