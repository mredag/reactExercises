import React from 'react';
import TodoList from './TodoList';

function App() {
  const renderItem = (item, index, handleRemoveItem) => (
    <li key={index}>
      {item} <button onClick={() => handleRemoveItem(index)}>Remove</button>
    </li>
  );

  const renderItems = (items, handleRemoveItem) => (
    <ul>
      {items.map((item, index) => renderItem(item, index, handleRemoveItem))}
    </ul>
  );

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList render={renderItems} />
    </div>
  );
}

export default App;
