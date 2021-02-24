import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      paragraph: [{
        paraState : false,
      }],  
    }
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(){
    
    this.setState({
      paragraph : [{
        paraState : true,
      }],
    })
    
  }

    render() {
      return(
        <div id="main">
        { /* Do not remove this main div!! */ }
        <button id="click" onClick={this.handleClick}>Click It</button>
        {
          this.state.paragraph[0].paraState ? 

          <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
          :
          null
        }
        </div>
      );
    }
}


export default App;
