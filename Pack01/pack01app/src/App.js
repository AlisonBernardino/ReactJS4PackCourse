import React, {useState, Component } from 'react';

class MainComponentButton extends Component {
  render() {
    return (
      <button
        onClick={() => { this.props.handleClick(this.props.label); }}
      >
        {this.props.label}
      </button>
    );
  }
}

class MainComponentLabel extends Component {
  render() {
    return <p>Clicked button: {this.props.text}</p>
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonText: '',
    };
  }

  setButtonText = (buttonText) => {
    this.setState({ buttonText });
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <MainComponentLabel text={this.state.buttonText} />
        {/* <MainComponentLabel labelText="Car management panel" alternativeLabel="Press the buttons to change the vehicle data" isTurnedOn={false}/> */}
        <MainComponentButton handleClick={this.setButtonText} label="Change color" />
        <MainComponentButton handleClick={this.setButtonText} label="Button model" />
        <MainComponentButton handleClick={this.setButtonText} label="Performance kit ON/OFF" />
        <MainComponentButton handleClick={this.setButtonText} label="Fueltank ON/OFF" />
      </div>
    );
  }
}

export default App;
