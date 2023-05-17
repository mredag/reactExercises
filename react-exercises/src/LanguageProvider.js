import React from 'react';
import LanguageContext from './LanguageContext';

function LanguageProvider({ language, children }) {
  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
