import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-content">
                <div className="header-left">
                    <h1>TASTY FOOD, DELIVERED WITH CARE</h1>
                    <p>
                        At Aarya's Cuisine, we understand your cravings and your busy life. While you focus on what matters most, we bring your favorite dishes right to your doorstep — fresh, authentic, and hassle-free.
                    </p>
                    <div className="header-buttons">
                        <Link to="/menu/starters" className="order-now-btn">ORDER NOW</Link>
                        <Link to="/menu" className="what-to-eat-btn">
                            <img src={assets.search_icon} alt="Search" />
                            WHAT TO EAT
                        </Link>
                    </div>
                    <div className="header-stats">
                        <div className="stat-item">
                            <h3>50+</h3>
                            <p>MERCHANTS</p>
                        </div>
                        <div className="stat-item">
                            <h3>150</h3>
                            <p>YUMMY MENUS</p>
                        </div>
                        <div className="stat-item">
                            <h3>1000+</h3>
                            <p>HAPPY CUSTOMERS</p>
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <div className="feature-icons">
                        <div className="icon-circle">
                            <img src={assets.delivery_icon} alt="Fast Delivery" />
                        </div>
                        <div className="icon-circle">
                            <img src={assets.quality_icon} alt="Best Quality" />
                        </div>
                        <div className="icon-circle">
                            <img src={assets.support_icon} alt="24/7 Support" />
                        </div>
                    </div>
                    <div className="food-image">
                        <img src={assets.header_img} alt="Delicious Food" className="main-food" />
                        <img src={assets.hero_animated} alt="Floating Food" className="floating-food" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
