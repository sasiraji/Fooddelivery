import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-content">
                <div className="header-left">
                    <h1>TASTY FOOD<br />COMING TO YOU</h1>
                    <p>
                        Your time is precious, and we know your struggle only to get your 
                        favorite food. Get your job done and let us lessen your hustle!
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
                            <h3>5K+</h3>
                            <p>MERCHANTS</p>
                        </div>
                        <div className="stat-item">
                            <h3>12K+</h3>
                            <p>YUMMY MENUS</p>
                        </div>
                        <div className="stat-item">
                            <h3>500K+</h3>
                            <p>HAPPY CUSTOMERS</p>
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <div className="feature-icons">
                        <div className="icon-circle">
                            <img src={assets.parcel_icon} alt="Fast Delivery" />
                        </div>
                        <div className="icon-circle">
                            <img src={assets.rating_starts} alt="Best Quality" />
                        </div>
                        <div className="icon-circle">
                            <img src={assets.profile_icon} alt="24/7 Support" />
                        </div>
                    </div>
                    <div className="food-image">
                        <img src={assets.header_img} alt="Delicious Pizza" className="main-food" />
                        <img src={assets.header_img} alt="Pizza Slice" className="floating-food" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
