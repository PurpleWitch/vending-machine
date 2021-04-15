import "./cards.css"
import { Component } from 'react';

class Cards extends Component{
  constructor(props){
    super(props);
    this.state={
      money: 0,
    }
  }

card=()=>{
  //redux
}

render() {
  return (
    <>
    <img className="credit-card" style={{left:"6vw",top:"10vh"}} src="https://s31168.pcdn.co/wp-content/uploads/2020/09/compare-cards-everyday-elite.png" alt="credit card" onClick={this.card}/>
    <input type="number" className="card-money" style={{left:"5vw",top:"23vh"}} onChange={()=>this.setState({money:this.value})} />
    </>
  );
}}

export default Cards;
