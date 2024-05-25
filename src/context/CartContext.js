import { type } from '@testing-library/user-event/dist/type';
import reducer from './../reducer/CartReducer'
import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("CartsData");
    if (localCartData) {
        return JSON.parse(localCartData)
    } else {
        return [];
    }
}
const intialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 500,
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, intialState);

    const addToCart = (product_id, quantity, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { product_id, quantity, product } })
    }

    //    increment and decrement 
    const setDecrement = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id })
    }
    const setIncrement = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id })
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    // clear cart 
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART", })
    }

    // to add in local storage 
    // get and set 
    useEffect(() => {
        dispatch({type: "CART_TOTAL_ITEM"})
        localStorage.setItem("CartsData", JSON.stringify(state.cart))
    }, [state.cart])



    return (
        <CartContext.Provider
            value={{
                ...state,
                addToCart,
                removeItem,
                clearCart,
                setDecrement,
                setIncrement
            }}>
            {children}
        </CartContext.Provider>
    )
}


const useCartContext = () => {
    return useContext(CartContext)
}


export { CartProvider, useCartContext }