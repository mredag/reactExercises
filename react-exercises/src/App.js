import React from 'react';
import Welcome from './welcome';

function App() {
    return (
      <div className="App">
        <Welcome name={<strong>Emre Doe</strong>} age={30} />
      </div>
    );
  }

export default App;
