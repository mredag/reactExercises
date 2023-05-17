import React, { useState } from 'react';
import LoginForm from './LoginForm';
import GithubUser from './GithubUser';

function App() {
  const [username, setUsername] = useState("");

  const handleChange = event => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <GithubUser/>
    </div>
  );
}

export default App;
