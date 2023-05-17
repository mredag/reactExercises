import React from 'react';
import FilteredList from './FilteredList';

function App() {
  const people = [
    { id: 1, name: 'John Doe', age: 22 },
    { id: 2, name: 'Jane Doe', age: 16 },
    { id: 3, name: 'Jim Doe', age: 45 },
    { id: 4, name: 'Jill Doe', age: 17 },
    { id: 5, name: 'Joe Doe', age: 25 },
  ];

  return (
    <div>
      <h1>Filtered People List:</h1>
      <FilteredList list={people} />
    </div>
  );
}

export default App;
