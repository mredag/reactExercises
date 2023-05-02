import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Welcome, {name}!</p>
        <p>Your age is {age}.</p>
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: 'DefaultName'
};

export default Welcome;
