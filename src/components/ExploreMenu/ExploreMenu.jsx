import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);

  return (
    <div className='explore-menu'>
      <div className='explore-menu-container'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>
          Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <div className='explore-menu-list'>
          {menu_list.map((item, index) => (
            <div 
              key={index} 
              className='explore-menu-list-item'
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setCategory(prev => prev === item.menu_name ? "All" : item.menu_name);
                }
              }}
            >
              <img 
                src={item.menu_image} 
                alt={item.menu_name}
                className={category === item.menu_name ? "active" : ""}
              />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExploreMenu
