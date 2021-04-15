import "./App.css"
import { Component } from 'react';
import Cards from './components/slots/cards';
import Coins from './components/slots/coins';
import Notes from './components/slots/notes';
import Snacks from './components/snacks/snacks';
import Keypad from './components/keypad/keypad';

class App extends Component{
render() {
  return (
    <>
    <Snacks />
    <Cards />
    <Coins />
    <Notes />
    <Keypad />
    </>
  );
}}

export default App;
