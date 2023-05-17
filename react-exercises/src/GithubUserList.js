import React, { useState } from 'react';
import GithubUser from './GithubUser';
function GithubUserList() {
  const [usernames, setUsernames] = useState([]);
  const [inputUsername, setInputUsername] = useState('');

  const handleInputChange = event => {
    setInputUsername(event.target.value);
  };

  const handleAddUsername = () => {
    setUsernames([...usernames, inputUsername]);
    setInputUsername(''); // Clear the input field
  };

  return (
    <div>
      <h1>Github User List</h1>
      <input 
        type="text" 
        value={inputUsername} 
        onChange={handleInputChange} 
        placeholder="Enter Github username"
      />
      <button onClick={handleAddUsername}>
        Add Username
      </button>
      {usernames.map((username, index) => (
        <GithubUser key={index} username={username} />
      ))}
    </div>
  );
}

export default GithubUserList;
