import React from 'react';

export const ItemsList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
};
