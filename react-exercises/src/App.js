import React, { useState } from 'react';
import Login from './Login';

function App() {
  const [message, setMessage] = useState('');

  const handleLogin = (credentials) => {
    console.log('Login:', credentials);
    setMessage(`Welcome, ${credentials.username}!`);
  };

  return (
    <div className="App">
      <Login onLogin={handleLogin} />
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
