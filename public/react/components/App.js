import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import { AddItemForm } from './AddItemForm';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);

	const [currentStatus, setCurrentStatus] = useState('view') //or 'add', 'update', 'delete'

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

	let contentToDisplay;
	switch(currentStatus) {
		case 'view': 
			contentToDisplay = (
				<>
					<ItemsList items={items} />
					<button onClick={() => setCurrentStatus('add')}>Add Item</button>
					<button onClick={() => setCurrentStatus('update')}>Update Item</button>
					<button onClick={() => setCurrentStatus('delete')}>Delete  Item</button>
				</>
			);
		break;

		case 'add': 
			contentToDisplay = (
				<>
					<AddItemForm setCurrentStatus={setCurrentStatus} items={items} setItems={setItems}/>
				</>
			);
		break;

		case 'update': 
			contentToDisplay = (
				<>
					<UpdateItemForm setCurrentStatus={setCurrentStatus} items={items} setItems={setItems}/>{/*Adrian, please add all the props you need for 'UpdateItemForm' in its tags*/}
				</>
			);
		break;

		case 'delete': 
			contentToDisplay = (
				<>
					<DeleteItemForm setCurrentStatus={setCurrentStatus} items={items} setItems={setItems}/>{/*Adrian, please add all the props you need for 'DeleteItemForm' in its tags*/}
				</>
			);
		break;

	}
	return (
		<main>	
      		<h1>Sauce Store</h1>
			<h2>All things 🔥</h2>
			{contentToDisplay}
		</main>
	)
}
