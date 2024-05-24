import React from 'react'
import QunatityControl from '../singlePageComponent/QunatityControl'

const CartItem = ({ id, quantity, image, catlog, name, price }) => {

    return (
        <>
            <div className='grid grid-cols-3 md:grid-cols-5 p-2 border-2 border-dashed border-gray-300 rounded-xl'>

                <div className='flex justify-start items-center gap-2'>

                    <div className="img h-12 w-12 bg-slate-100 rounded-md shadow-md overflow-hidden">
                        <img src={image} alt="img" className='h-full object-cover overflow-hidden' />
                    </div>

                    <div className="details text-sm md:text-md">
                        <div className="title font-medium text-nowrap  w-16 md:w-24 lg:w-28 text-ellipsis overflow-hidden ">{name}</div>
                        <div className="category font-light text-nowrap w-12 md:w-24 lg:w-28 text-ellipsis overflow-hidden text-xs ">{catlog}</div>
                    </div>

                </div>

                <div className='hidden md:flex justify-center items-center'>
                    <span>
                        $<span className='font-medium text-teal-700'>{price}</span>
                    </span>
                </div>

                <div className='flex justify-end md:justify-center items-center'>
                    <QunatityControl increment={""} decrement={""} quant={quantity} />
                </div>

                <div className='hidden md:flex  justify-center items-center'>
                    $ <span className='font-medium text-teal-700'>{price * quantity}</span>
                </div>

                <div className='flex justify-end md:justify-center items-center px-2 group'>
                    <i className='fa-solid fa-trash text-red-600  active:text-teal-700 hover:scale-125  transition-all duration-300 ease-in cursor-pointer group-hover:fa-bounce'></i>
                </div>
            </div>
        </>
    )
}

export default CartItem