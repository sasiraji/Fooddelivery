import React, { useState, useEffect, Suspense, lazy } from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StoreContextProvider from './Context/StoreContext'
import FloatingActions from './components/FloatingActions/FloatingActions'
import BackToTop from './components/BackToTop/BackToTop'

// Lazy load components
const Home = lazy(() => import('./pages/Home/Home'));
const Cart = lazy(() => import('./pages/Cart/Cart'));
const LoginPopup = lazy(() => import('./components/LoginPopup/LoginPopup'));
const PlaceOrder = lazy(() => import('./pages/PlaceOrder/PlaceOrder'));
const MyOrders = lazy(() => import('./pages/MyOrders/MyOrders'));
const Verify = lazy(() => import('./pages/Verify/Verify'));
const MenuCategoryPage = lazy(() => import('./pages/MenuCategories/MenuCategoryPage'));

const LoadingSpinner = () => (
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

const App = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingSpinner />;
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
        <StoreContextProvider>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Suspense fallback={<LoadingSpinner />}>
                <Navbar setShowLogin={setShowLogin} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/place-order' element={<PlaceOrder />} />
                    <Route path='/myorders' element={<MyOrders />} />
                    <Route path='/verify' element={<Verify />} />
                    <Route path='/menu/:category' element={<MenuCategoryPage />} />
                </Routes>
                <Footer />
                <FloatingActions />
                <BackToTop />
                {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
            </Suspense>
        </StoreContextProvider>
    );
}

export default App;
