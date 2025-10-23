import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
function ItemList() { 
const [items, setItems] = useState([]); 
useEffect(() => { 
axios.get('http://localhost:5000/items') 
.then(res => setItems(res.data)) 
.catch(err => console.error(err)); 
}, []); 
return ( 
<div> 
<h2>Item List</h2> 
<ul> 
{items.map(item => ( 
          <li key={item._id}> 
            <strong>{item.title}</strong> - {item.description} 
          </li> 
        ))} 
      </ul> 
    </div> 
  ); 
} 
 
export default ItemList; 