import React, { useState } from 'react';
import GithubUser from './GithubUser'; // Assuming GithubUser.js is in the same directory

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
    </div>
  );
}

export default App;
