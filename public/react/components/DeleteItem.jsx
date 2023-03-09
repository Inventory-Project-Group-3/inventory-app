import React, { useState } from "react";
import apiURL from "../api";

//Adrian' delete item

export function deleteItem ({ id, setItems, items }) {

    const deleteItem = async () => {
      try {
        const response = await fetch(`${apiURL}/items/${id}`, {
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
    };
  
    return (
      <button onClick={deleteItem}>Delete</button>
    );
  };