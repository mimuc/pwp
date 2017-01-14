import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let randomNumber = Math.random();
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <Clock></Clock>
        <p>
          This is a random number {randomNumber}
        </p>
        <WelcomeFunction name="Sepp" age="10"></WelcomeFunction>
        <WelcomeFunction name="Schorschi" age="30"></WelcomeFunction>
        <WelcomeClass name="William" age="30"></WelcomeClass>
        <TemperatureDisplay scale="f" temperature="27"></TemperatureDisplay>
        <TemperatureDisplay scale="c" temperature="27"></TemperatureDisplay>
        <Temperature></Temperature>
      </div>
    );
  }
}

class WelcomeClass extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}. (Welcome Class)</h1>
        <p>I am {this.props.age} years old </p>
      </div>
    )
  }
}

function WelcomeFunction(props) {
  return (
    <div>
      <h1>Hello, {props.name}. (Welcome Function)</h1>
      <p>I am {props.age} years old </p>
    </div>
  )

}

class ClockDisplay extends Component {
  render() {
    return (
      <div>
        <h2>It's {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <ClockDisplay date={this.state.date}></ClockDisplay>
      </div>
    )
  }
}


class TemperatureDisplay extends Component {
  render() {
    if (this.props.scale === 'f') {
      let convertedValue = (this.props.temperature * 9 / 5) + 32;
      return <h3>Temperature: {convertedValue} F</h3>
    }
    return <h3>Temperature: {this.props.temperature} °C</h3>
  }
}

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature : 27
    };

    this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
  }

  handleTemperatureChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    return (
      <div>
        <input type="range" min="0" max="100" onChange={this.handleTemperatureChange} />
        <TemperatureDisplay scale="f" temperature={this.state.temperature}></TemperatureDisplay>
        <TemperatureDisplay scale="c" temperature={this.state.temperature}></TemperatureDisplay>
      </div>
    )
  }
}


export default App;
