import "./balance.css"
import { Component } from 'react';

class Balance extends Component{
  constructor(props){
    super(props);
    this.state={
      message: "",
      money:"",
    }
  }

addMoney=()=>{
  //redux
}

render() {
  return (
    <>
    <input type="number" className="input-money" style={{left:"46vw",top:"88vh"}} onChange={this.addMoney} readOnly />
    <p className="message">{this.state.message}</p>
    </>
  );
}}

export default Balance;
