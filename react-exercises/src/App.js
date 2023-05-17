import React, { useState } from 'react';
import LoginForm from './LoginForm';
import GithubUser from './GithubUser';
import CarDetails from './CarDetails';

function App() {
  const [username, setUsername] = useState("");

  const handleChange = event => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <CarDetails/>
    </div>
  );
}

export default App;
