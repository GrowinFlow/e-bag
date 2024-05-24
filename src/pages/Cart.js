import React from 'react'
import { useCartContext } from '../context/CartContext'
import CartItem from './pageComponents/cartComponent/CartItem'


const Cart = () => {

  const {cart} = useCartContext()
  console.log(cart, "this is cart")


  return (
    <>
      <div className="container mx-auto p-4 text-sm md:text-md lg:text-lg">

        <div className="grid grid-cols-3 md:grid-cols-5 py-4 text-gray-500 font-bold min-w-[300px]:bg-red-200">

          <div className='flex justify-start px-2 items-center'>
            Items
          </div>

          <div className='hidden md:flex justify-center items-center'>
            Price
          </div>

          <div className='flex pl-8 md:p-0 justify-center items-center'>
            Quantity
          </div>

          <div className='hidden md:flex justify-center items-center'>
            Sub Total
          </div>


          <div className='flex justify-end md:justify-center  items-center px-2'>
            Remove
          </div>


        </div>
        <hr />


        <div className="flex flex-col gap-4">
               {cart.map((curElem)=>{
          return (
            <CartItem key={curElem.id} {...curElem} />
          );
        })}


      


        </div>

      </div>
    
    
    </>
  )
}

export default Cart