import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { foodList, menuList } from '../data/menuData';

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});
    const [food_list, setFoodList] = useState(foodList);
    const [menu_list, setMenuList] = useState(menuList);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [url] = useState("http://localhost:4000");
    const [currency] = useState("$");
    const [deliveryCharge] = useState(5);

    const addToCart = async (itemId) => {
        setCartItems(prev => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const removeFromCart = async (itemId) => {
        setCartItems(prev => {
            const newCart = { ...prev };
            if (newCart[itemId] > 0) {
                newCart[itemId]--;
                if (newCart[itemId] === 0) {
                    delete newCart[itemId];
                }
            }
            return newCart;
        });
    };

    const getTotalCartAmount = () => {
        let total = 0;
        for (const item of food_list) {
            if (cartItems[item.id.toString()]) {
                total += item.price * cartItems[item.id.toString()];
            }
        }
        return total;
    };

    const loadCartData = ({ token }) => {
        // Load cart data from server or local storage
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    };

    useEffect(() => {
        // Save cart to local storage whenever it changes
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const value = {
        cartItems,
        food_list,
        menu_list,
        token,
        loading,
        error,
        url,
        currency,
        deliveryCharge,
        setToken,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        loadCartData
    };

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
