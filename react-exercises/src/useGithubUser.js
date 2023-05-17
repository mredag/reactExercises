import { useState, useEffect, useCallback } from 'react';

function useGithubUser(initialUsername) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(initialUsername);

  const fetchGithubUser = useCallback(async () => {
    setLoading(true);
    setUser(null);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const user = await response.json();
      setUser(user);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, [username]);

  useEffect(() => {
    if (username) {
      fetchGithubUser();
    }
  }, [username, fetchGithubUser]);

  return { loading, user, error, setUsername, fetchGithubUser };
}

export default useGithubUser;
