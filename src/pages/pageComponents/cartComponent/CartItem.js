import React from 'react'
import QunatityControl from '../singlePageComponent/QunatityControl'
import { useCartContext } from '../../../context/CartContext';


const CartItem = ({ id, quantity, image, catlog, name, price, stock }) => {
    const {removeItem, setDecrement, setIncrement} = useCartContext()


    return (
        <>
            <div className='grid grid-cols-3 md:grid-cols-5 p-2 border-2 border-dashed border-gray-300 rounded-xl'>

                <div className='flex justify-start items-center gap-2'>

                    <div className="img h-12 w-12 bg-slate-100 rounded-md shadow-md overflow-hidden">
                        <img src={image} alt="img" className='h-full object-cover overflow-hidden' height="18" width="50"/>
                    </div>

                    <div className="details text-sm md:text-md">
                        <div className="title font-medium text-nowrap  w-16 md:w-24 lg:w-28 text-ellipsis overflow-hidden ">{name}</div>
                        <div className="category text-nowrap w-12 md:w-24 lg:w-28 text-ellipsis overflow-hidden text-xs font-medium">ID<span className='font-light'>{id}</span></div>
                    </div>

                </div>

                <div className='hidden md:flex justify-center items-center'>
                    <span>
                        $<span className='font-medium text-teal-700'>{price}</span>
                    </span>
                </div>

                <div className='flex justify-end md:justify-center items-center'>
                    <QunatityControl increment={()=>setIncrement(id)} decrement={()=>setDecrement(id)} quant={quantity} />
                </div>

                <div className='hidden md:flex  justify-center items-center'>
                    $ <span className='font-medium text-teal-700'>{(price * quantity).toFixed(2)}</span>
                </div>

                <div className='flex justify-end md:justify-center items-center px-2 group'>
                    <i 
                    onClick={()=>removeItem(id)}
                    className='fa-solid fa-trash text-red-600  active:text-teal-700   transition-all duration-300 ease-in cursor-pointer hover:scale-125 '
                    ></i>
                </div>
            </div>
        </>
    )
}

export default CartItem