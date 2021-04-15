import './keypad.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from '../../redux/actions';

class Keypad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numpad: 0,
            message: "",
            prices:[5,4.2,1.3,2.5,25,2.7,3.4,2,1],
        };
    }
    onPress = (e) => {
        let old = this.state.numpad
        if (old < 10) {
            this.setState({ numpad: (old * 10) + Number(e.target.value) })
        }
    }

    back = () => {
        let old = this.state.numpad
        this.setState({ numpad: Math.floor(old / 10) })
    }

    calculateChange=(amount)=>{
        console.log(amount)
        var fifties = Math.floor(amount / 50)
        var twenties = Math.floor((amount % 50) / 20)
        var ones = Math.floor((amount % 50) % 20)
        var fiftyCents = Math.floor((amount % 1 * 100) / 50)
        var twentyCents = Math.floor(((amount % 1 * 100) % 50) / 20)
        var tenCents = Math.floor((((amount % 1 * 100) % 50) % 20) / 10)
        return [fifties,twenties,ones,fiftyCents,twentyCents,tenCents]
    }

    enter = () => {
        //not enough money
        let price = this.state.prices[(this.state.numpad+'')[1]-1]
        if(this.props.inputMoney<price){this.setState({message:"Not enough money to buy, please! Insert more money."});return;}
        
        //number inserted is not a snack id
        let item = document.getElementById(this.state.numpad+``)
        if(item!==null){

        //animation move item to bought section
            item.style.left="90vw";
            item.style.top="45vh";

        //clear input money
            this.props.reset();

        //calculate and return money change method
            let change = this.calculateChange(this.props.inputMoney-price);
            let message = `The machine returns `;
            if(change[0]) message+=`${change[0]} fifty note(s), `
            if(change[1]) message+=`${change[1]} twenty note(s), `
            if(change[2]) message+=`${change[2]} one dollar coin(s), `
            if(change[3]) message+=`${change[3]} fifty cents coin(s), `
            if(change[4]) message+=`${change[4]} twenty cents coin(s), `
            if(change[5]) message+=`${change[5]} ten cent coint(s) `
            message+=`to you.`;
            this.setState({message});
        }
    }

    render() {
        return (
            <div className="numpad">
                <div className="result">
                    <label>
                        {this.state.numpad}
                    </label>
                </div>
                <div className="row-1">
                    <button value={1} onClick={this.onPress}>{1}</button>
                    <button value={2} onClick={this.onPress}>{2}</button>
                    <button value={3} onClick={this.onPress}>{3}</button>
                </div>
                <div className="row-2">
                    <button value={4} onClick={this.onPress}>{4}</button>
                    <button value={5} onClick={this.onPress}>{5}</button>
                    <button value={6} onClick={this.onPress}>{6}</button>
                </div>
                <div className="row-3">
                    <button value={7} onClick={this.onPress}>{7}</button>
                    <button value={8} onClick={this.onPress}>{8}</button>
                    <button value={9} onClick={this.onPress}>{9}</button>
                </div>
                <div className="row-4">
                    <button value="b" onClick={this.back}>⇠</button>
                    <button value={0} onClick={this.onPress}>{0}</button>
                    <button value="e" onClick={this.enter}>⇢</button>
                </div>
                <p className="message" style={{left:"25vw",top:"88vh"}}>{this.state.message}</p>
            </div>
        );
    }
}

// Redux

const mapStateToProps = (state) => {
    return { inputMoney: state.inputMoney }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return { reset : () => { dispatch ( reset () ) } }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Keypad);
