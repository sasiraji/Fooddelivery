<<<<<<< HEAD
import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = ({category,setCategory}) => {

  const {menu_list} = useContext(StoreContext);
  
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
=======
import React from 'react';
import './ExploreMenu.css';
import assets from '../../assets/assets';

const categories = [
  { name: 'Appetizers', image: '/images/menu/menu_1.png' },
  { name: 'Bread Rolls', image: '/images/menu/menu_2.png' },
  { name: 'Bread', image: '/images/menu/menu_3.png' },
  { name: 'Burritos', image: '/images/menu/menu_4.png' },
  { name: 'Curry', image: '/images/menu/menu_5.png' },
  { name: 'Dessert', image: '/images/menu/menu_6.png' },
  { name: 'Rice Bowl', image: '/images/menu/menu_7.png' },
  { name: 'Rice Variety', image: '/images/menu/menu_8.png' }
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
>>>>>>> 654e5f637d09ea247cc9544d678011ed88cca846
