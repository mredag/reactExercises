import React, { Component } from 'react';

class ClickTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastButtonPressed: ''
    };
  }

  handleButtonClick = (event) => {
    this.setState({ lastButtonPressed: event.target.name });
  };

  render() {
    return (
      <div>
        <button name="Button 1" onClick={this.handleButtonClick}>
          Button 1
        </button>
        <button name="Button 2" onClick={this.handleButtonClick}>
          Button 2
        </button>
        <button name="Button 3" onClick={this.handleButtonClick}>
          Button 3
        </button>
        <h1>Last button pressed: {this.state.lastButtonPressed}</h1>
      </div>
    );
  }
}

export default ClickTracker;
