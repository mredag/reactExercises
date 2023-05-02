import React, { Component } from 'react';
import Age from './Age';

class Welcome extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Welcome, {name}!</p>
        {age > 18 && age < 65 && name === "John" && <Age age={age} />}
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: 'Guest'
};

export default Welcome;
