import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [foodList, setFoodList] = useState([]);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addToCart = (item) => {
        setCartItems(prev => {
            const existingItem = prev.find(i => i._id === item._id);
            if (existingItem) {
                return prev.map(i => 
                    i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems(prev => prev.filter(item => item._id !== itemId));
    };

    const updateCartItemQuantity = (itemId, quantity) => {
        setCartItems(prev => 
            prev.map(item => 
                item._id === itemId ? { ...item, quantity } : item
            )
        );
    };

    const fetchFoodList = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/api/food-items');
            setFoodList(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const login = async (credentials) => {
        try {
            setLoading(true);
            const response = await axios.post('/api/auth/login', credentials);
            const { token, user } = response.data;
            setToken(token);
            setUser(user);
            localStorage.setItem('token', token);
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
    };

    useEffect(() => {
        if (token) {
            // Fetch user data
            const fetchUser = async () => {
                try {
                    const response = await axios.get('/api/auth/me', {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setUser(response.data);
                } catch (err) {
                    setError(err.message);
                    logout();
                }
            };
            fetchUser();
        }
    }, [token]);

    const value = {
        cartItems,
        foodList,
        user,
        token,
        loading,
        error,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        fetchFoodList,
        login,
        logout
    };

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error('useStore must be used within a StoreContextProvider');
    }
    return context;
};

export default StoreContext;
