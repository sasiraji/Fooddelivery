import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import assets from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { cartItems, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    window.location.reload();
  }

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/") setMenu("home");
    else if (currentPath.includes("myorders")) setMenu("myorders");
    else if (currentPath.includes("cart")) setMenu("cart");
  }, []);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="logo" className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon" onClick={() => navigate("/cart")}>
          <img src={assets.basket_icon} alt="cart" />
          <div className={Object.keys(cartItems).length === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="profile" />
            <ul className="navbar-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>My Orders</li>
              <hr />
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
