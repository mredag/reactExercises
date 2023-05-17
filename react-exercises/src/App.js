import React, { useState } from 'react';
import DisplayLanguage from './DisplayLanguage';
import LanguageProvider from './LanguageProvider';

function App() {
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
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
    </div>
  );
}

export default App;
