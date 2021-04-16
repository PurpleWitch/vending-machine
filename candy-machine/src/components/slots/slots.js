import "./slots.css"
import { Component } from 'react';
import { connect } from 'react-redux';
import { add } from '../../redux/actions';

class Slots extends Component{
  constructor(props){
    super(props);
    this.state={
      cardMoney: 0,
    }
  }

addCard=()=>{
  this.props.add(this.state.cardMoney)
}

addFiftyDollars=()=>{
    this.props.add(50)
}

addTwentyDollars=()=>{
    this.props.add(20)
}

addDollar=()=>{
    this.props.add(1)
}

addFiftyCents=()=>{
    this.props.add(0.5)
}

addTwentyCents=()=>{
    this.props.add(0.2)
}

addTenCents=()=>{
  this.props.add(0.1)
}

render() {
  return (
    <>
    {/* credit card */}
    <img className="credit-card" style={{left:"6vw",top:"10vh"}} src="https://s31168.pcdn.co/wp-content/uploads/2020/09/compare-cards-everyday-elite.png" alt="credit card" onClick={this.addCard}/>
    <input type="number" className="card-money" style={{left:"5vw",top:"23vh"}} onChange={(e)=>this.setState({cardMoney:Number(e.target.value)})} />
    
    {/* paper money */}
    <img className="paper-money" style={{left:"4vw",top:"30vh"}} src="https://cdn.shortpixel.ai/client2/q_lossless,ret_img,w_563,h_243/https://www.papermoneywanted.com/images/2009-fifty-dollar-federal-reserve-notes.png" alt="fifty dollars" onClick={this.addFiftyDollars}/>
    <img className="paper-money" style={{left:"4vw",top:"42vh"}} src="https://www.silverrecyclers.com/uploads/blog-images/1999-20-dollar-bill.jpg" alt="twenty dollars" onClick={this.addTwentyDollars}/>

    {/* coins */}
    <img className="coin-money" style={{left:"4vw",top:"55vh"}} src="https://i.imgur.com/eUDJyfi.png" alt="one dollar" onClick={this.addDollar}/>
    <img className="coin-money" style={{left:"4vw",top:"65vh"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/US_Half_Dollar_Obverse_2015.png/1200px-US_Half_Dollar_Obverse_2015.png" alt="fifty cents" onClick={this.addFiftyCents}/>
    <img className="coin-money" style={{left:"4vw",top:"75vh"}} src="https://herblackpants.files.wordpress.com/2015/08/sgd20c-big.png?w=640&h=640" alt="twenty cents" onClick={this.addTwentyCents}/>
    <img className="coin-money" style={{left:"4vw",top:"85vh"}} src="https://cloud.educaplay.com/recursos/168/5392834/imagen_1_1586273197.png" alt="ten cents" onClick={this.addTenCents}/>

    {/* total input */}
    <input type="number" className="input-money" style={{left:"45vw",top:"85vh"}} value={this.props.inputMoney} readOnly />
    </>
  );
}}


// Redux

const mapStateToProps = (state) => {
  return { inputMoney: state.inputMoney }
}

const mapDispatchToProps = (dispatch) => {
  return { add : (x) => { dispatch ( add (x) ) } }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slots);
