import "./App.css"
import { Component } from 'react';
import Cards from './components/slots/cards';
import Coins from './components/slots/coins';
import Notes from './components/slots/notes';
import Snacks from './components/snacks/snacks';
import Candy from './components/snacks/candy';
import Keypad from './components/keypad/keypad';
import Balance from './components/change/balance';


class App extends Component{
render() {
  return (
    <>
    <Snacks />
    <Candy />
    <Cards />
    <Coins />
    <Notes />
    <Keypad />
    <Balance />
    </>
  );
}}

export default App;
