import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";
import QunatityControl from "./QunatityControl";



const AddToCart = ({ initialStock, country,product, product_id }) => {
    const { addToCart } = useCartContext();

    const [quantity, setQuantity] = useState(1);
    const [stock, setStock] = useState(initialStock);
  
    useEffect(() => {
      if (quantity < initialStock) {
        setStock(initialStock - quantity);
      }
    }, [quantity, initialStock]);
  
    const setDecrement = () => {
      setQuantity((prevQuantity) => {
        if (prevQuantity > 1) {
          return prevQuantity - 1;
        }
        return 1;
      });
    };
    const setIncrement = () => {
      setQuantity((prevQuantity) => {
        if (prevQuantity < stock) {
          return prevQuantity + 1;
        }
        return prevQuantity;
      });
    };
    
    // Logging for debugging
    console.log(product)
    // console.log("Quantity:", quantity);
    // console.log("Stock:", stock);
  
    return (
      <>
                  <div className='py-2 lg:py4'>
                <hr />
              </div>
  
              <div className="country-and-stock flex items-center justify-between ">
  
                <div className="country-label text-sm flex item justify-end">
                  <p>Made in <span className='text-gray-500'>{country}</span></p>
                </div>
                <div className="total-stock text-sm py-2">
                  Avaibale: <i> {stock}</i>
                  <span className='text-xs text-gray-500'>{stock > 0 ? " Items In Stock" : "Out of Stock"}</span>
                </div>
              </div>
  
              <div className='py-2 lg:py4'>
                <hr />
              </div>
      <div className="quantity flex gap-2 items-center py-2 lg:py-4">
        <span>Quantity</span>
  <QunatityControl increment={setIncrement} decrement={setDecrement} quant={quantity} />
      </div>

<div className="btns pt-2 lg:py-4 flex gap-2 md:flex-row flex-col justify-between items-center">
    
              <NavLink  
              className="text-white w-full flex justify-center items-center gap-2 bg-gradient-to-br from-teal-600 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5" 
              onClick={()=>addToCart(product_id, quantity, product)}
              >

                <i className="fa-solid fa-cart-shopping"></i>
                Add to cart
              </NavLink>

              <NavLink to={`/cart`} className="text-white w-full flex justify-center items-center gap-2 bg-gradient-to-br from-teal-600 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5">
                <i className="fa-solid fa-truck"></i>Buy now
              </NavLink>

            </div>
    
    </>
  )
}

export default AddToCart