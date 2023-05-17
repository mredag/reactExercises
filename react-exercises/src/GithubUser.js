import React from 'react';
import useGithubUser from './useGithubUser';

function GithubUser({ username }) {
  const { loading, user, error } = useGithubUser(username);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return null;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <img src={user.avatar_url} alt={user.name} />
    </div>
  );
}

export default GithubUser;
