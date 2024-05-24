import React from 'react'
import { useProductContext } from '../../../context/ProductContext'
import FeaturesProductComponent from '../productComponent/FeaturesProductComponent';

function FeatureSection() {

    const { featureProducts} = useProductContext();
    // const {isLoading, featureProducts} = useProductContext();
    // console.log(featureProducts)

  return (
    <>

    <div className="container mx-auto p-4 py-6">
        <div className="heading">
            <span className='text-gray-400'>Check now:</span>
            <h3 className='text-2xl md:text-4xl font-bold py-4'>Feature Products</h3>
        </div>

        <div className="flex gap-4 flex-wrap md:grid-cols-2 md:grid lg:grid-cols-4 border-2 border-dashed p-4 justify-items-center border-gray-200 rounded-lg">
            {featureProducts.map((curElem)=>{
                return <FeaturesProductComponent key={curElem.product_id} {...curElem}  />
            })}
        </div>
    </div>

    </>
  )
}

export default FeatureSection