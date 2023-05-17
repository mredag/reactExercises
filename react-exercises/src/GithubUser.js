import React from 'react';
import useGithubUser from './useGithubUser'; // Assuming useGithubUser.js is in the same directory

function GithubUser() {
  const { loading, user, error, setUsername, fetchGithubUser } = useGithubUser('octocat');

  const handleFetch = () => {
    fetchGithubUser();
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <input type="text" />
      <button onClick={handleFetch}>Fetch User</button>
      {user && (
        <>
          <h1>{user.name}</h1>
          <p>{user.bio}</p>
          <img src={user.avatar_url} alt={user.name} />
        </>
      )}
    </div>
  );
}

export default GithubUser;
