import React, { useState } from "react";
import apiURL from "../api";

//Adrian's update item code
export function pdateItemForm ({ item, setIsUpdatingItem, setItems, items }) {

    const [name, setName] = useState(item.name);
    const [description, setDescription] = useState(item.description);
    const [price, setPrice] = useState(item.price);
    const [category, setCategory] = useState(item.category);
    const [image, setImage] = useState(item.image);

const submitUpdateItemForm = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(`${apiURL}/items/${item.id}`, {
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
            }),
          });
    
          const updatedItem = await response.json();
    
          setItems(
            items.map((item) => (item.id === updatedItem.id ? updatedItem : item))
          );
    
          setIsUpdatingItem(false);
        
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

        <button onClick={() => setIsEditingItem(false)}>Back to Items List</button>

        <button type="submit">Update and Item</button>
      </form>
    </>
  );

};

