import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { AddItemForm } from './AddItemForm';

export const App = () => {

//Add Item
	const [items, setItems] = useState([]);
	const [isAddingItem, setIsAddingItem] = useState(false);

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);


	return (
		<main>	
      		<h1>Sauce Store</h1>
			<h2>All things 🔥</h2>
			{!isAddingItem ? (<>
				<ItemsList items={items} setIsAddingItem={setIsAddingItem} />
				<button onClick={() => setIsAddingItem(true)}>Add Item</button>
				</>)
			: (<AddItemForm setIsAddingItem={setIsAddingItem} items={items} setItems={setItems}/>)}
		</main>
	)
}
