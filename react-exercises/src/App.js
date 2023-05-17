import React, { useState } from 'react';
import DisplayLanguage from './DisplayLanguage';
import LanguageContext from './LanguageContext';

function App() {
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <LanguageContext.Provider value={language}>
      <DisplayLanguage />
      <select onChange={handleLanguageChange}>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
        <option value="German">German</option>
      </select>
    </LanguageContext.Provider>
  );
}

export default App;
