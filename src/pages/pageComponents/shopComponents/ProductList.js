import React from 'react'
import ListView from './ListView'
import GridView from './GridView'
import { useFilterContext } from './../../../context/FilterContext';



function ProductList() {

     const { filter_products, grid_view  } = useFilterContext();

     if(grid_view){
        return (
            <GridView products={filter_products} />
        )
    }
    if(grid_view === false){
        return (
            <ListView products={filter_products} />
        )
     }
  

}

export default ProductList