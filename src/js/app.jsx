import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      rate: 0,
      term: 15,
      output: 0
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  calculate({balance, rate, term}) {
    rate = rate/1200
    this.setState({output: balance * ((rate*(1+rate)**(term*12))/((1+rate)**(term*12)-1))})
  }

  render() {
    return (
      <div className='container form-horizontal'>
        <h3>Mortgage Calculator</h3>
        <input name="balance" type="number" value={this.state.balance}
          onChange={this.handleChange.bind(this)}/>
        <input name="rate" type="number" step="0.01" value={this.state.rate}
          onChange={this.handleChange.bind(this)}/>
        <select name="term" onChange={this.handleChange.bind(this)}>
          <option value="15">15</option>
          <option value="30">30</option>
        </select>
        <button name="submit" onClick={() => this.calculate.bind(this)(this.state)}>Submit</button>
        <div name="output" id="output">
          <p>${this.state.output.toFixed(2)} is your payment.</p>
        </div>
      </div>
    );
  }
}

// this is a test