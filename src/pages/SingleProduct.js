import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';
import Breadcrumb from '../components/Breadcrumb';
import SkeletonSingleProduct from '../skeletonPages/SkeletonSingleProduct'
import RatingStar from './pageComponents/singlePageComponent/RatingStar'

import AddToCart from './pageComponents/singlePageComponent/AddToCart';
import LoadingBar from '../components/LoadingBar';
import Toast from '../components/Toast';



const API = 'https://raw.githubusercontent.com/GrowinFlow/json/main/data.json';

function SingleProduct() {


  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  
  const { id } = useParams();

  const correctId = parseInt(id) - 1;
  const correctProduct = singleProduct[correctId] || {};

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);
  

  const { product_id, title, product_feature_img, current_price, category, description, discount_percentage, discount_price, ratings, reviews, made_country, keywords, product_stock, product_images } = correctProduct;
  // console.log(correctProduct);

  const [mainImg, setMainImg] = useState(product_images ? product_images[0] : '');

  if (isSingleLoading) {
    return (
      <>
      <LoadingBar />
    <SkeletonSingleProduct />
      </>
  )
  }



  return (

    <>

      <div className="container mx-auto transition-all ease-linear duration-300 overflow-x-hidden">

        <div className="p-4 flex flex-col tems-center">

          {/* breadcrumb_navigation  */}
          <Breadcrumb link_1={"/"} text_1="Home" link_2={"/shop"} text_2={"Shop"} text_3={category} text_4={title} />
        </div>


        <div className="product_veiw px-4 flex flex-col justify-center md:grid grid-cols-5 gap-2 ">



          {/* images  */}
          <div className="product-img-area grid grid-rows-[50px_,_1fr] md:flex justify-between gap-2 md:col-span-2">


            <div className="product-more-images gap-8 flex items-center justify-start flex-row md:flex-col">
              {
                product_images && product_images.map((key, index) => (

                  <div className="img ring-2 ring-teal-700 rounded-md w-10 h-10 md:w-10 overflow-hidden p-[1px] group ">
                    <img src={key} alt="" key={index} className='rounded-md object-fit group-hover:scale-110 cursor-pointer transition-all ease-linear duration-300' onClick={() => { setMainImg(product_images[index]) }} />
                  </div>

                ))
              }

            </div>
            <div className="feature-image  w-[] md:w-[90%] h-full flex justify-center 
            ">
              <img src={mainImg || product_feature_img} alt={title} />
              
            </div>

          </div>


          <div className="product-details-and-cart md:col-span-3 px-4 pb-2 border-2 border-dashed rounded-lg border-gray-300">

            <div className="product-title text-xl md:text-2xl lg:text-3xl lg:pb-4">
              <h1>{title}</h1>
            </div>

            <div className="discription text-xs md:text-sm lg:text-md text-gray-500 lg:py-4">
              <p>{description}</p>
            </div>

            <div className="rating-and-share flex justify-between items-center py-2 lg:py-4">

              <div className="rating flex items-center gap- text-xs md:text-sm lg:text-md text-yellow-300">
                <RatingStar rating={ratings} />
                <span className='rounded-md p-[1px] ml-2 px-2 text-sm bg-yellow-300 text-blue-600'>
                  {ratings}
                </span>
                <span className='px-2 text-gray-500'>(reviews {reviews})</span>
              </div>

              <div className="share flex gap-2">
                <span className='p-2 w-6 lg:w-8 h-6 lg:h-8 flex items-center justify-center hover:shadow-md text-gray-500 text-sm md:text-md lg:text-lg rounded-full active:bg-slate-200'>
                  <i className="fa-solid fa-share-nodes"></i>
                </span>
                <span className='p-2 w-6 lg:w-8 h-6 lg:h-8 flex items-center justify-center  text-gray-500 text-sm md:text-md lG:text-lg rounded-full active:bg-slate-200 active:shadow-md group'>
                  <i className="fa-regular fa-heart group-hover:text-rose-500"></i></span>
              </div>
            </div>

            <div className="keywords flex gap-2 flex-wrap items-center justify-start">
              {
                keywords && keywords.map((key, index) => (
                  <span className='rounded-md px-4 p-1 bg-gray-200 shadow-md text-xs' key={index}>{key}</span>
                ))
              }
            </div>

            <div className='py-2 lg:py4'>
              <hr />
            </div>


            <div className="price gap-2 lg:py-4 py-2 flex items-center justify-between">
              <div className="current-price_dicount text-2xl">$
                <span className='text-bold text-teal-700'>{discount_price}</span>
                <sub className='line-through text-gray-500 z-0'>{current_price}</sub>
              </div>
              <div className="discount-perscent text-2xl">-
                <span className='text-black'>{discount_percentage}<span className='text-teal-700'>%</span></span>
              </div>
            </div>

 
            <AddToCart  initialStock={product_stock} country={made_country} product={correctProduct} mainImg={mainImg} title={title}/>


          </div>





        </div>

<br />
<br />
<br />
<br />
<br />

      </div>

    </>
  )
}

export default SingleProduct;
