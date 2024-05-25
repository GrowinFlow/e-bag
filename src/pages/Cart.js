import React, { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import CartItem from './pageComponents/cartComponent/CartItem';
import Buttons from './../components/Buttons';
import ThanksNote from '../components/ThanksNote';
import ConfirmToast from '../components/ConfirmToast';

const Cart = () => {
    const { cart, clearCart, shipping_fee } = useCartContext();
    const [showConfirmToast, setShowConfirmToast] = useState(false);

    const handleClearCart = () => {
        setShowConfirmToast(true);
    };

    const confirmClearCart = () => {
        clearCart();
        setShowConfirmToast(false);
    };

    const cancelClearCart = () => {
        setShowConfirmToast(false);
    };

    let subtotal = 0;
    cart.forEach((item) => {
        subtotal += item.price * item.quantity;
    });

    const total = subtotal + shipping_fee;


  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <ThanksNote heading="No Cart In Items" note="Thanks for reaching.." />
        <Buttons
          btnText={
            <span className="text-sm">
              <i className="fa-solid fa-backward fa-fade"></i> &nbsp; CONTINUE SHOPING
            </span>
          }
          btnLink="/shop"
        />
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto p-4 text-sm md:text-md lg:text-lg">
        <div className="grid grid-cols-3 md:grid-cols-5 py-4 text-gray-500 font-bold min-w-[300px]:bg-red-200">
          <div className="flex justify-start px-2 items-center">Items</div>
          <div className="hidden md:flex justify-center items-center">Price</div>
          <div className="flex pl-8 md:p-0 justify-center items-center">Quantity</div>
          <div className="hidden md:flex justify-center items-center">Sub Total</div>
          <div className="flex justify-end md:justify-center items-center px-2">Remove</div>
        </div>
        <div className="hr py-4 w-full border-t-2 border-gray-400"></div>
        <div className="flex flex-col gap-4">
          {cart.map((curElem) => {
            return <CartItem key={curElem.product_id} {...curElem} />;
          })}
        </div>
        <div className="hr py-4 w-full border-b-2 border-gray-400"></div>
        <div className="btns py-4 flex justify-between items-center">
          <Buttons
            btnText={
              <span className="text-sm">
                <i className="fa-solid fa-backward fa-fade"></i> &nbsp; CONTINUE SHOPING
              </span>
            }
            btnLink="/shop"
          />
          <button
            onClick={handleClearCart}
            className="text-white w-auto bg-red-600 focus:outline-none ring-4 ring-transparent focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Clear Cart
          </button>
        </div>
      </div>
      {showConfirmToast && (
        <ConfirmToast
          conHeading="Clear Cart Confirmation"
          conDetails="Are you sure you want to clear the cart?"
          fBtn="Yes"
          sBtn="No"
          onConfirm={confirmClearCart}
          onCancel={cancelClearCart}
        />
      )}

<div className="container mx-auto px-4">
        <div className="bill-box flex justify-end items-start ">
        <div className="box flex-col justify-center items-center border-2 border-dashed border-gray-200 rounded-lg p-4">
                        <div className="sub-total flex items-center justify-between w-60 font-medium">
                            <div className="Heading font-semibold text-gray-400">SUBTOTAL</div>
                            <div className="value">$ <span className='text-teal-700'>{subtotal.toFixed(2)}</span></div>
                        </div>
                        <div className="sub-total flex items-center justify-between w-60 font-medium">
                            <div className="Heading font-semibold text-gray-400">SHIPPING FEE</div>
                            <div className="value">$ <span className='text-teal-700'>{shipping_fee}</span></div>
                        </div>
                        <div className='py-2'>

                        <hr />
                        </div>
                        <div className="sub-total flex items-center justify-between w-60 font-medium">
                            <div className="Heading font-semibold text-gray-400">TOTAL</div>
                            <div className="value">$ <span className='text-teal-700'>{total.toFixed(2)}</span></div>
                        </div>
                    </div>
        </div>
    </div>
    <br />
    </>
  );
};

export default Cart;
