import React from 'react';
import './ExploreMenu.css';
import assets from '../../assets/assets';

const categories = [
  { name: 'Appetizers', image: assets.menu_1 },
  { name: 'Bread Rolls', image: assets.menu_2 },
  { name: 'Bread', image: assets.menu_3 },
  { name: 'Burritos', image: assets.menu_4 },
  { name: 'Curry', image: assets.menu_5 },
  { name: 'Dessert', image: assets.menu_6 },
  { name: 'Rice Bowl', image: assets.menu_7 },
  { name: 'Rice Variety', image: assets.menu_8 }
];

const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes.
        Our mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {categories.map((item, index) => (
          <div key={index} className="explore-menu-list-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
