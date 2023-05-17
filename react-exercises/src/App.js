import React, { useState } from 'react';
import GithubUser from './GithubUser'; 
import GithubUserList from './GithubUserList';
import CounterComponent from './CounterComponent';

function App() {
  const [username, setUsername] = useState("");

  const handleChange = event => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <CounterComponent/>
    </div>
  );
}

export default App;
