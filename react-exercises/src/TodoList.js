import React, { useState } from 'react';

function TodoList({ render }) {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveItem = (indexToRemove) => {
    const newItems = items.filter((_, index) => index !== indexToRemove);
    setItems(newItems);
  };

  return (
    <div>
      {render(items, handleRemoveItem)}
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
