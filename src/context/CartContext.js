import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./../reducer/CartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("CartsData");
  if (localCartData) {
    return JSON.parse(localCartData);
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalCartData(),
  total_item: 0,
  total_price: 0,
  shipping_fee: 1500,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product_id, quantity, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { product_id, quantity, product } });
  };

  // Increment and decrement
  const setDecrement = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // Clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Update total items and total price
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_PRICE" });
    dispatch({ type: "CART_TOTAL_ITEM" });
    localStorage.setItem("CartsData", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrement,
        setIncrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
