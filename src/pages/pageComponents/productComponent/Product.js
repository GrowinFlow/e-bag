import React from 'react'
import Buttons from '../Buttons'

const Product = (curElem) => {

    const {id,name, image, price, category, description} = curElem;

  return (
    <div>


        <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-teal-500 ring-opacity-40 max-w-sm group cursor-pointer">
    <div className="relative">
        <img className="w-full group-hover:scale-[1.09]" src={image} alt="Product Image" />
        <div className="absolute top-0 right-0 bg-teal-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">{category}
        </div>
    </div>
    <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 h-12 text-ellipsis overflow-hidden leading-4">{description}</p>
        <div className="flex items-center justify-between">
            <span className="font-bold text-lg">${price}</span>
            <Buttons btnLink={`/singleproduct/${id}`} btnText="Buy now" />
        </div>
    </div>
</div>

    </div>
  )
}

export default Product