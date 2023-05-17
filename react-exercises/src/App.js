import React from 'react';
import ClickCounter from './ClickCounter';

function App() {
  const handleCounterChange = (currentCount) => {
    console.log(`The counter has changed to: ${currentCount}`);
    // You can handle the counter change here
  };

  return (
    <div>
      <h1>App Component</h1>
      <ClickCounter onCounterChange={handleCounterChange} />
    </div>
  );
}

export default App;
