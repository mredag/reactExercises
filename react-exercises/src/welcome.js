import React, { Component } from 'react';
import Age from './Age';

class Welcome extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Welcome, {name}!</p>
        {age > 18 && age < 65 && <Age age={age} />}
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: 'Default name'
};

export default Welcome;
