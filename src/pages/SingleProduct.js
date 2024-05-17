import React from 'react'
import { useParams } from 'react-router-dom'
import Product from './pageComponents/productComponent/Product'
import { useProudctContext } from '../context/ProductContext'

function SingleProduct() {
  const params = useParams()
  const { isLoading, featureProducts } = useProudctContext()
  
  // Find the product by ID
  const product = featureProducts.find(product => product.id === params.id)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <>
    <div className="container mx-auto">

      <div className="container mx-auto p-4 py-6 flex flex-col justify-center items-center">
        <div className="heading">
          <span className='text-gray-400'>Check now:</span>
          <h3 className='text-2xl md:text-4xl font-bold py-4'>Feature Product</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-3 md:gap-8">
          <Product key={product.id} {...product} />
        </div>
      </div>
    </div>
    </>
  )
}

export default SingleProduct
