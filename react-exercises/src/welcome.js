import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <p>Welcome, {name}!</p>
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: 'Emre'
};

export default Welcome;
