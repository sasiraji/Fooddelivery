import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'
import { Link } from 'react-router-dom'

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
            <Link
              key={index}
              to={`/menu/${item.menu_name.toLowerCase().replace(/\s+/g, '-')}`}
              className='explore-menu-list-item'
            >
              <img 
                src={item.menu_image} 
                alt={item.menu_name}
                className={category === item.menu_name ? "active" : ""}
              />
              <p>{item.menu_name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExploreMenu
