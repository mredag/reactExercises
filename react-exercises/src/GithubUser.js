import React, { useState, useEffect } from 'react';

function GithubUser({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error:', error));
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <img src={user.avatar_url} alt="user avatar" width="100" />
    </div>
  );
}

export default GithubUser;
