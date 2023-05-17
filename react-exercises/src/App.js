import React, { useState } from 'react';
import GithubUser from './GithubUser'; 
import GithubUserList from './GithubUserList';

function App() {
  const [username, setUsername] = useState("");

  const handleChange = event => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <h1>App Component</h1>
      <input type="text" value={username} onChange={handleChange} placeholder="Enter Github username" />
      <GithubUser username={username} />
      <GithubUserList/>
    </div>
  );
}

export default App;
