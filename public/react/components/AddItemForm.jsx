import React, { useState } from "react";
import apiURL from "../api";

export function AddItemForm({setCurrentStatus, setItems, items}) {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");

    const submitAddItemForm = async (e) => {
        e.preventDefault();

        try {
        const response = await fetch(`${apiURL}/items`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                name: name, 
                description: description,
                price: price,
                category: category,
                image: image    
            })
        });

        const createdItem = await response.json();

        console.log(createdItem);

        setItems([...items, createdItem])

        setName("");
        setDescription("");
        setPrice("");
        setCategory("");
        setImage("");
        
        setCurrentStatus('view');

        } catch(error) {
            console.error(error)
        }
    }
    return (
      <>
        <h2>Add an Item</h2>
        <form onSubmit={submitAddItemForm}> 

        <input type="text" placeholder="Name" aria-label="name" value={name} onChange={(e) => setName(e.target.value)} />

        <input type="text" placeholder="Description" aria-label="description" value={description} onChange={(e) => setDescription(e.target.value)} />

        <input type="text" placeholder="Price" aria-label="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        
        <input type="text" placeholder="Category" aria-label="category" value={category} onChange={(e) => setCategory(e.target.value)} /> 

        <input type="text" placeholder="Image" aria-label="image" value={image} onChange={(e) => setImage(e.target.value)} />

        <button onClick={() => setCurrentStatus('view')}>Back to Items List</button>

        <button type="submit">Create an Item</button>

        </form>
      </> 
    );
  }