import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NumberIncrement: 0,
      NumberDecrement: 0
    };
  }
  increment = () => {
    this.setState(state => {
      return {NumberIncrement: state.NumberIncrement + 1}
      });
  }
  decrement = () => {
    this.setState(state => {
      return {NumberDecrement: state.NumberDecrement - 1}
      });
  }
  render () {
    return (
    <div>
      <button onClick={this.increment}>+</button> number: {this.state.NumberIncrement}
    <br/>
    <button onClick={this.decrement}>-</button> number: {this.state.NumberDecrement}
    </div>
    )}
}

export default App;
