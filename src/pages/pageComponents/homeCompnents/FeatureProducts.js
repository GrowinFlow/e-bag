import React from 'react'
import { useProudctContext } from '../../../context/ProductContext'
import Product from '../productComponent/Product';

function FeatureProducts() {

    const {isLoading, featureProducts} = useProudctContext();
    console.log(featureProducts)
  return (
    <>

    <div className="container mx-auto p-4 py-6">
        <div className="heading">
            <span className='text-gray-400'>Check now:</span>
            <h3 className='text-2xl md:text-4xl font-bold py-4'>Feature Products</h3>
        </div>
        <div className="flex justify-center flex-wrap md:grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {featureProducts.map((curElem)=>{
                return <Product key={curElem.id} {...curElem}  />
            })}
        </div>
    </div>

    </>
  )
}

export default FeatureProducts