import React, { useState } from "react";
import apiURL from "../api";

//Adrian's update item code
export function UpdateItemForm ({ setCurrentStatus, setItems, items }) {

    const [id, setId] = useState('');//not saved into the db
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

const submitUpdateItemForm = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(`${apiURL}/items/id/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              description: description,
              price: price,
              category: category,
              image: image,
            })
          });
    
          const updatedItem = await response.json();
    
          setItems([...items, updatedItem]);

          setId("");
          setName("");
          setDescription("");
          setPrice("");
          setCategory("");
          setImage("");
    
          setCurrentStatus('view');
        
    } catch (error) {
        console.log(error);
    }
};

return (
    <>
      <h2>Update Item</h2>
      <form onSubmit={submitUpdateItemForm}>
      <input
          type="text"
          placeholder="ID"
          aria-label="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          aria-label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          aria-label="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Price"
          aria-label="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          aria-label="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image"
          aria-label="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button onClick={() => setCurrentStatus('view')}>Back to Items List</button>

        <button type="submit">Update Item</button>
      </form>
    </>
  );

};

