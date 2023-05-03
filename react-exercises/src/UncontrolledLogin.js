import React, { Component } from 'react';

class UncontrolledLogin extends Component {
  constructor(props) {
    super(props);
    this.usernameInput = React.createRef();
    this.passwordInput = React.createRef();
  }

  componentDidMount() {
    this.usernameInput.current.focus();
  }

  handleSubmit = () => {
    const credentials = {
      username: this.usernameInput.current.value,
      password: this.passwordInput.current.value
    };
    this.props.onLogin(credentials);
  };

  handleReset = () => {
    this.usernameInput.current.value = '';
    this.passwordInput.current.value = '';
  };

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.usernameInput}
          placeholder="Enter your username"
        />
        <input
          type="password"
          ref={this.passwordInput}
          placeholder="Enter your password"
        />
        <button onClick={this.handleSubmit}>Login</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default UncontrolledLogin;
