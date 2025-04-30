import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-content">
                <div className="header-left">
                    <h1>Order your favourite food here</h1>
                    <p>
                        Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and 
                        culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, 
                        one delicious meal at a time.
                    </p>
                    <Link to="/menu/starters" className="view-menu-btn">View Menu</Link>
                </div>
                <div className="header-right">
                    <img src={assets.header_img} alt="Delicious food" />
                </div>
            </div>
        </div>
    )
}

export default Header
