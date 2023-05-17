import React, { useState } from 'react';
import DisplayLanguage from './DisplayLanguage';
import LanguageProvider from './LanguageProvider';
import Login from './Login';

function App() {
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  const handleLogin = (credentials) => {
    console.log(credentials);
    const existingUser = {
      username: "Emre",
      password: "secret123"
    };

    // Check if entered credentials match existing user
    if (credentials.username === existingUser.username && credentials.password === existingUser.password) {
      console.log("Login successful!");
      alert("Login successful!");
      // Further logic here for successful login (e.g., changing app state to logged in)
    } else {
      console.log("Login failed. Incorrect username or password.");
      alert("Login failed. Incorrect username or password.");
      // Further logic here for failed login (e.g., showing an error message)
    }
    
  };

  return (
    <div>
      <h1>Language Selector</h1>
      <select value={language} onChange={handleLanguageChange}>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
        <option value="Turkish">Turkish</option>
        <option value="Emre">Emre</option>
      </select>
      <LanguageProvider language={language}>
        <DisplayLanguage />
      </LanguageProvider>
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
