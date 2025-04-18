import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import assets from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'

const LoginPopup = ({ setShowLogin }) => {
  const [email, setEmail] = useState('');
  const { url, setToken } = useContext(StoreContext);

  const onLogin = async () => {
    try {
      const response = await axios.post(url + "/api/user/login", { email });
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } catch (error) {
      alert("Login failed. Try again.");
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={(e) => e.preventDefault()}>
        <div className="login-popup-title">
          <h2>Login</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-input">
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button onClick={onLogin}>Continue</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, you agree to our Terms & Conditions</p>
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
