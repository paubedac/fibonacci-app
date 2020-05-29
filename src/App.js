import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      result: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value.replace(/\D/,'') });
  }

  handleSubmit(event) {
    console.log('Valor ingresado: ' + this.state.value);
    const fibParameter = this.state.value;
    fetch("/fibonacci/" + fibParameter)
      .then(response => response.json())
      .then(data => {
          console.log(data)
          this.setState({ result: data });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Fibonacci App</h2>
        </div>
        <form className="Fibonacci-form" onSubmit={this.handleSubmit}>
          <label>
            Ingrese un numero:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Enviar"/>
        </form>
        <div>{this.state.result}</div>
      </div>
    );
  }
}
export default App;
