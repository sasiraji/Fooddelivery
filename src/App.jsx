import React, { useState, useEffect } from 'react'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import LoginPopup from './components/LoginPopup/LoginPopup'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import MyOrders from './pages/MyOrders/MyOrders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify'
import { StoreContext } from './Context/StoreContext'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Add a small delay to show loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '24px'
      }}>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        color: 'red'
      }}>
        {error}
      </div>
    );
  }

  return (
    <>
      <ToastContainer/>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : null}
      <div className='app' style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar setShowLogin={setShowLogin}/>
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/order' element={<PlaceOrder />}/>
            <Route path='/myorders' element={<MyOrders />}/>
            <Route path='/verify' element={<Verify />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
