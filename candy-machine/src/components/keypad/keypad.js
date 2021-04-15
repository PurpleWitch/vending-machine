import { Component } from 'react';
import './keypad.css';
class Keypad extends Component{
    constructor(props) {
        super(props);
        this.state = {
            numpad:0,
        };
      }
onPress=(e)=>{
    let old = this.state.numpad
    if(old<9999){
    this.setState({numpad:(old*10)+Number(e.target.value)})
    }

}
back=()=>{
    let old = this.state.numpad
    this.setState({numpad:Math.floor(old/10)})
}
enter=()=>{
    console.log("wow asfdkljsd khasdkfjlsad jfbsadjkl fhasdlkj fhasdhf dsajk ffb")
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
    <button value="z" onClick={this.back}>⬸</button>
    <button value={0} onClick={this.onPress}>{0}</button>
    <button value="x" onClick={this.enter}>⤑</button>
    </div>
    </div>
  );
}}

export default Keypad;