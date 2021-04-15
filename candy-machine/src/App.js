import "./App.css"
import { Component } from 'react';
import Slots from './components/slots/slots';
import Candy from './components/snacks/candy';
import Snacks from './components/snacks/snacks';
import Keypad from './components/keypad/keypad';


class App extends Component{
render() {
  return (
    <>
    <Snacks />
    <Candy />
    <Keypad />
    <Slots />
    </>
  );
}}

export default App;
