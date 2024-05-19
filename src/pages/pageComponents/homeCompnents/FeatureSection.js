import React from 'react'
import { useProudctContext } from '../../../context/ProductContext'
import FeaturesProductComponent from '../productComponent/FeaturesProductComponent';

function FeatureSection() {

    const {isLoading, featureProducts} = useProudctContext();
    // console.log(featureProducts)
  return (
    <>

    <div className="container mx-auto p-4 py-6">
        <div className="heading">
            <span className='text-gray-400'>Check now:</span>
            <h3 className='text-2xl md:text-4xl font-bold py-4'>Feature Products</h3>
        </div>

        <div className="flex justify-center gap-2 flex-wrap md:flex-nowrap">
            {featureProducts.map((curElem)=>{
                return <FeaturesProductComponent key={curElem.product_id} {...curElem}  />
            })}
        </div>
    </div>

    </>
  )
}

export default FeatureSection