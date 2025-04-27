import { createContext, useEffect, useState } from "react";
import * as assets from "../assets/assets";
import axios from "axios";
import { toast } from 'react-toastify';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = import.meta.env.VITE_API_URL || "http://localhost:4000";
    const [food_list, setFood_list] = useState(assets.food_list);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const currency = "₹";
    const deliveryCharge = 50;

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        
        if (token) {
            try {
                await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
            } catch (error) {
                console.error("Error adding item to cart:", error);
                toast.error("Failed to add item to cart. Please try again.");
            }
        }
    }

    const removeFromCart = async (itemId) => {
        if (cartItems[itemId] > 0) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
            if (token) {
                try {
                    await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
                } catch (error) {
                    console.error("Error removing item from cart:", error);
                    toast.error("Failed to remove item from cart. Please try again.");
                }
            }
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(url + "/api/food/list");
            if (response.data && response.data.data) {
                setFood_list(response.data.data);
            } else {
                setFood_list(assets.food_list);
                toast.warning("Using default food list data");
            }
        } catch (error) {
            console.error("Error fetching food list:", error);
            toast.error("Failed to fetch food list. Using default data.");
            setFood_list(assets.food_list);
        } finally {
            setIsLoading(false);
        }
    }

    const loadCartData = async (token) => {
        try {
            const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
            setCartItems(response.data.cartData);
        } catch (error) {
            console.error("Error loading cart data:", error);
            toast.error("Failed to load cart data");
            setCartItems({});
        }
    }

    const refreshToken = async () => {
        if (!token) return;
        try {
            const response = await axios.post(url + "/api/auth/refresh", {}, { headers: { token } });
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
        } catch (error) {
            console.error("Error refreshing token:", error);
            setToken("");
            localStorage.removeItem("token");
        }
    };

    useEffect(() => {
        async function loadData() {
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                await loadCartData(storedToken);
            }
            await fetchFoodList();
        }
        loadData();

        // Set up token refresh interval
        const refreshInterval = setInterval(refreshToken, 30 * 60 * 1000); // Refresh every 30 minutes
        return () => clearInterval(refreshInterval);
    }, []);

    const contextValue = {
        url,
        food_list,
        menu_list: assets.menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        loadCartData,
        setCartItems,
        currency,
        deliveryCharge,
        isLoading
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;