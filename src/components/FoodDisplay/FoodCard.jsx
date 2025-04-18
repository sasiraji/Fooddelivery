
import React from 'react';
import './FoodDisplay.css';

function FoodCard({ image, name, price, description }) {
  return (
    <div className="food-item">
      <img src={image} alt={name} />
      <div className="food-item-details">
        <h4>{name}</h4>
        <p>{description}</p>
        <p>₹{price}</p>
      </div>
    </div>
  );
}

export default FoodCard;
