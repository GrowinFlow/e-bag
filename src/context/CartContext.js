import reducer from './../reducer/CartReducer'
import { createContext, useContext, useReducer } from "react";

const CartContext  = createContext();

const intialState = {
    cart: [],
    total_item: "",
    total_amount: "",
    shipping_fee: 5000,
}

const CartProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, intialState);

   const addToCart = (product_id, quantity, product)=> {
    dispatch({type: "ADD_TO_CART", payload: {product_id, quantity, product}})
   }






    return (
    <CartContext.Provider value={{...state, addToCart}}>
        {children}
        </CartContext.Provider>
)
}


const useCartContext =() => {
    return useContext(CartContext)
}


export { CartProvider, useCartContext }