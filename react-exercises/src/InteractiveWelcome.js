import React, { Component } from 'react';
import Welcome from './welcome';

class InteractiveWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleInputChange}
          placeholder="Enter your name"
        />
        <Welcome name={this.state.name} />
      </div>
    );
  }
}

export default InteractiveWelcome;
