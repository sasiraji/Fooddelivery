import React, { useState } from 'react';
import { foodList } from '../../data/menuData';
import * as assets from '../../assets/assets';


function ExploreMenu() {
  const categories = [...new Set(foodList.map(item => item.category || 'All'))];
  const [category, setCategory] = useState('All');

  const filteredList = category === 'All' ? foodList : foodList.filter(item => item.category === category);

  return (
    <div className="explore-menu">
      <div className="categories">
        {categories.map((cat, index) => (
          <button key={index} className={cat === category ? 'active' : ''} onClick={() => setCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>
      <div className="menu-list">
        {filteredList.map(item => (
          <div key={item.id}>
            <img src={assets[item.image]} alt={item.name} />
            <p>{item.name} - ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreMenu;
