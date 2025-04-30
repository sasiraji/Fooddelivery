import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import { FaShoppingCart, FaArrowUp } from 'react-icons/fa';

const FloatingActions = () => {
    const navigate = useNavigate();
    const { cartItems } = useContext(StoreContext);
    const [showBackToTop, setShowBackToTop] = useState(false);

    // Calculate total items in cart
    const cartItemCount = Object.values(cartItems).reduce((a, b) => a + b, 0);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="floating-actions">
            <button 
                className="floating-button floating-cart"
                onClick={() => navigate('/cart')}
                aria-label="Go to cart"
            >
                <FaShoppingCart />
                {cartItemCount > 0 && (
                    <span className="floating-cart-count">{cartItemCount}</span>
                )}
            </button>
            
            {showBackToTop && (
                <button 
                    className="floating-button back-to-top"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
};

export default FloatingActions; 