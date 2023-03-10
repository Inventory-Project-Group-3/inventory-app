import React from 'react';

export const ItemsList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </div>
  );
};
