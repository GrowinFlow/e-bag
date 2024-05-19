import React from 'react'
import Buttons from '../Buttons'

const FeaturesProductComponent = (curElem) => {

    const { product_id, title, product_feature_img, 
current_price, category, description } = curElem;

    return (
        <>


            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl grow md:shrink group">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                    <img
                        src={product_feature_img}
                        alt="card-image" className="transition duration-300 ease-in object-cover w-full h-full group-hover:scale-[1.2]" />
                </div>
                <div className="category absolute flex justify-end w-full px-8">
                    <span className='bg-white text-teal-600 p-2 rounded-md relative top-8 '>{category}</span>
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            {title}
                        </p>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            ${
current_price}
                        </p>
                    </div>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75 max-h-10 overflow-hidden text-ellipsis ">
                        {/* {description} */}
                    </p>
                </div>
                <div className="p-6 pt-0 w-full">
                    <Buttons btnLink={`/singleproduct/${product_id}`} btnText={"Add to cart"} />


                </div>
            </div>

   


                </>
            
            )
}

            export default FeaturesProductComponent