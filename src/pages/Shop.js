import React from 'react'

import ProductList from './pageComponents/shopComponents/ProductList';
import Sort from './pageComponents/shopComponents/Sort';
import FilterSection from './pageComponents/shopComponents/FilterSection';

function Shop() {
  


  return (
    <>
<Sort />

<div className='container mx-auto p-4 flex flex-col md:flex-row '>
  <FilterSection />
  <ProductList />
</div>


 
    
    </>
  )
}

export default Shop


