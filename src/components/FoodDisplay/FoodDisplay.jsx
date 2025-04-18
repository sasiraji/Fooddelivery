import React from 'react';
import './FoodDisplay.css';
import FoodCard from './FoodCard';
import { foodList } from '../../data/menuData';
import assets from '../../assets/assets';

function FoodDisplay() {
  return (
    <div className="food-display">
      {foodList.map(item => (
        <FoodCard
          key={item.id}
          image={assets[item.image]}
          name={item.name}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default FoodDisplay;
