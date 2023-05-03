import React, { useState } from 'react';
import UncontrolledLogin from './UncontrolledLogin';

function App() {
  const [message, setMessage] = useState('');

  const handleLogin = (credentials) => {
    console.log('Login:', credentials);
    setMessage(`Welcome, ${credentials.username}!`);
  };

  return (
    <div className="App">
      <UncontrolledLogin onLogin={handleLogin} />
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
