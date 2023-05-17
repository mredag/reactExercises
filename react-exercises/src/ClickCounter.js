import React, { useState, useEffect } from 'react';

function ClickCounter({ onCounterChange }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Call the onCounterChange function every time the count changes
    onCounterChange(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

export default ClickCounter;
