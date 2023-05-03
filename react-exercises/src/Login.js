import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    this.props.onLogin(this.state);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
          placeholder="Enter your username"
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
          placeholder="Enter your password"
        />
        <button
          onClick={this.handleSubmit}
          disabled={!this.state.username || !this.state.password}
        >
          Login
        </button>
      </div>
    );
  }
}

export default Login;
