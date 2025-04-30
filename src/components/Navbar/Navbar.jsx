import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken, menu_list } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  }

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/") setMenu("home");
    else if (currentPath.includes("myorders")) setMenu("myorders");
    else if (currentPath.includes("cart")) setMenu("cart");
    else if (currentPath.includes("menu")) setMenu("menu");
  }, []);

  return (
    <div className="navbar-wrapper">
      <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="logo" className='logo' /></Link>
        <ul className="navbar-menu">
          <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
          <div className="menu-dropdown">
            <a href='#' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
            <div className="menu-dropdown-content">
              {menu_list.map((item, index) => (
                <Link 
                  key={index} 
                  to={`/menu/${item.menu_name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setMenu("menu")}
                >
                  {item.menu_name}
                </Link>
              ))}
            </div>
          </div>
          <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
          <a href='#footer' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="search" />
          <Link to='/cart' className='navbar-search-icon'>
            <img src={assets.basket_icon} alt="cart" />
            <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
          </Link>
          {!token ? (
            <button onClick={() => setShowLogin(true)}>Sign In</button>
          ) : (
            <div className="navbar-profile">
              <img src={assets.profile_icon} alt="profile" />
              <ul className="navbar-profile-dropdown">
                <li onClick={() => navigate('/myorders')}>
                  <img src={assets.bag_icon} alt="" />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={handleLogout}>
                  <img src={assets.logout_icon} alt="" />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
