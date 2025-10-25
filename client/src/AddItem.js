import React, { useState } from 'react';
import axios from 'axios';
import './AddItem.css'; // <-- 1. IMPORT YOUR NEW CSS FILE

function AddItem() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newItem = { title, description };

    axios.post('http://localhost:5000/items', newItem)
      .then(res => {
        console.log('Item added:', res.data);
        setTitle('');
        setDescription('');
      })
      .catch(err => console.error(err));
  };

  return (
    /* 2. ADD THE CLASS NAME TO THE FORM */
    <form className="add-item-form" onSubmit={handleSubmit}>
      <h3>Add New Item</h3>

      {/* 3. ADD THE CLASS NAME TO THE DIV */}
      <div className="form-row">
        
        {/* 4. FIX "name:" TO BE "Title:" TO MATCH YOUR SCHEMA */}
        <label>Title:</label>
        
        <input 
          type="text" 
          value={title}
          onChange={e => setTitle(e.target.value)} 
          required 
        />
      </div>

      {/* 3. ADD THE CLASS NAME TO THE DIV */}
      <div className="form-row">
        <label>Description:</label>
        <input 
          type="text" 
          value={description}
          onChange={e => setDescription(e.target.value)} 
          required
        />
      </div>
      
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItem;