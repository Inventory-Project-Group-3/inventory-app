import React, { useState } from "react";
import apiURL from "../api";

//Adrian' delete item

export function DeleteItemForm ({ setCurrentStatus, setItems, items }) {

  const [id, setId] = useState('');

    const submitDeleteItemForm = async (e) => {

      e.preventDefault();

      try {
        const response = await fetch(`${apiURL}/items/id/${id}`, {
          method: "DELETE"
        });
  
        if (response.ok) {
          setItems(items.filter(item => item.id !== id));
        } else {
          console.error("Failed to delete item");
        }
      } catch (error) {
        console.error(error);
      }

      setCurrentStatus('view');
    };
    
    return (
      <>
          <h2>Delete Item</h2>
          <form onSubmit={submitDeleteItemForm}>
          <input
          type="text"
          placeholder="ID"
          aria-label="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          />
          <button onClick={() => setCurrentStatus('view')}>Back to Items List</button>
          <button type="submit">Delete Item</button>
          </form>
        </>
        );
}; 