import React, { useState, useEffect } from "react";
import { useCartContext } from "../../../context/CartContext";
import QunatityControl from "./QunatityControl";
import Toast from "../../../components/Toast";

const AddToCart = ({ initialStock, country, product, product_id, mainImg, title }) => {
  const { addToCart } = useCartContext();

  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState(initialStock);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (quantity < initialStock) {
      setStock(initialStock - quantity);
    }
  }, [quantity, initialStock]);

  const setDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const setIncrement = () => {
    setQuantity((prevQuantity) => (prevQuantity < stock ? prevQuantity + 1 : prevQuantity));
  };

  const handleAddToCart = () => {
    addToCart(product_id, quantity, product);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };
  const handleCloseToast = () => {
    setShowToast(false);
  };



  return (
    <>
      <div className="py-2 lg:py4">
        <hr />
      </div>
      <div className="country-and-stock flex items-center justify-between">
        <div className="country-label text-sm flex item justify-end">
          <p>Made in <span className="text-gray-500">{country}</span></p>
        </div>
        <div className="total-stock text-sm py-2">
          Available: <i>{stock}</i>
          <span className="text-xs text-gray-500">{stock > 0 ? " Items In Stock" : "Out of Stock"}</span>
        </div>
      </div>
      <div className="py-2 lg:py4">
        <hr />
      </div>
      <div className="quantity flex gap-2 items-center py-2 lg:py-4">
        <span>Quantity</span>
        <QunatityControl increment={setIncrement} decrement={setDecrement} quant={quantity} />
      </div>
      <div className="btns pt-2 lg:py-4 flex gap-2 md:flex-row flex-col justify-between items-center">
        <button
          className="text-white w-full flex justify-center items-center gap-2 bg-teal-700 active:text-teal-700 active:bg-white focus:ring-4 focus:outline-none focus:ring-teal-500 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={handleAddToCart}
        >
          <i className="fa-solid fa-cart-plus"></i>
          Add to cart
        </button>
      </div>
      {showToast && (
        <Toast
          toastHeading="Congratulations!"
          toastImg={mainImg}
          toastDetails={`Your item '${title}' is added.`}
          toastBtnLink="/cart"
          toastBtnText="Go to Cart"
          onClose={handleCloseToast}
        />
      )}
    </>
  );
};

export default AddToCart;
