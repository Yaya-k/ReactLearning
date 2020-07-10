import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Message from "./Message";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Message texte={"je suis chaud!!"} porter={"visible"}/>
          <Message texte={"je suis chaud!!"} porter={"visible"}/>
          <Message texte={"je suis chaud!!"} porter={"visible"}/>

        </div>
    )
  }
}

export default App;
