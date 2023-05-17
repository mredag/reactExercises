import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberChange = (event) => {
    setRemember(event.target.checked);
  };

  const handleLogin = () => {
    if(username && password) {
      onLogin({ username, password, remember });
      setUsername('');
      setPassword('');
      setRemember(false);
    } else {
      alert("Username and Password cannot be empty");
    }
  };

  const handleReset = () => {
    setUsername('');
    setPassword('');
    setRemember(false);
  };

  return (
    <div>
      <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <label>
        Remember me
        <input type="checkbox" checked={remember} onChange={handleRememberChange} />
      </label>
      <button onClick={handleLogin} disabled={!username || !password}>Login</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Login;
