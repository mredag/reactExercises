import React from 'react';
import LanguageContext from './LanguageContext';

function DisplayLanguage() {
  return (
    <LanguageContext.Consumer>
      {language => (
        <h1>Selected Language: {language}</h1>
      )}
    </LanguageContext.Consumer>
  );
}

export default DisplayLanguage;
