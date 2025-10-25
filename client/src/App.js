
import React from 'react';
import ItemList from './ItemList';
import AddItem from './AddItem'; // <-- 1. Import your new component

function App() {
  return (
    <div>
      <h1>Sample MongoDB Test App</h1>
      
      <AddItem /> {/* <-- 2. Add the form component here */}
      
      <hr /> {/* Just a line to separate the form from the list */}

      <ItemList />
    </div>
  );
}

export default App;