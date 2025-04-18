import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { food_list, menu_list } from '../data/menuData';


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [url, setUrl] = useState("http://localhost:4000"); // change if needed
  const currency = "$";
  const deliveryCharge = 2;

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[itemId] > 1) updated[itemId] -= 1;
      else delete updated[itemId];
      return updated;
    });
  };

  const getTotalCartAmount = () => {
    return foodList.reduce((total, item) => {
      if (cartItems[item.id]) {
        total += item.price * cartItems[item.id];
      }
      return total;
    }, 0);
  };

  const contextValue = {
    foodList,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
    currency,
    deliveryCharge
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
