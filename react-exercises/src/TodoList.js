import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue(''); // This line clears the input value
    }
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a todo item"
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default TodoList;
