import { NavLink } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import React from "react";

function SkeletonSingleProduct() {
  return (
    <div className="container mx-auto transition-all ease-linear duration-300 overflow-x-hidden animate-pulse">
      <div className="p-4 flex">
        {/* breadcrumb_navigation  */}
        <Breadcrumb link_1={""} text_1="" link_2={""} text_2={""} link_3={""} text_3={""} text_4={""} />
      </div>

      <div className="product_view p-4 flex flex-col justify-center md:grid grid-cols-5 gap-2">
        {/* images  */}
        <div className="product-img-area grid-rows-[50px_,_1fr] md:flex justify-between gap-2 md:col-span-2">


          <div className="product-more-images gap-8 flex items-center justify-start flex-row md:flex-col">

                <div className="img ring-2 ring-gray-200 rounded-md w-10 h-10 md:w-10 overflow-hidden p-[1px] group bg-gray-200 border-2 border-white ">
                </div>
                <div className="img ring-2 ring-gray-200 rounded-md w-10 h-10 md:w-10 overflow-hidden p-[1px] group bg-gray-200 border-2 border-white ">
                </div>
                <div className="img ring-2 ring-gray-200 rounded-md w-10 h-10 md:w-10 overflow-hidden p-[1px] group bg-gray-200 border-2 border-white ">
                </div>

            
          </div>
          <div className="feature-image w-[100%] bg-gray-200 md:w-[90%] h-[75vh] flex justify-center 
">
          </div>

        </div>




        <div className="product-details-and-cart md:col-span-3 px-4">

          <div className="product-title bg-gray-200 rounded-lg h-20 w-[20] text-xl md:text-2xl lg:text-3xl lg:pb-4"></div>

          <div className="rating-and-share flex justify-between items-center py-4">
            <div className="rating flex items-center gap-1 ">
              {Array(5).fill().map((_, index) => (
                <i key={index} className="fa-solid bg-gray-200 rounded-md w-6 h-6"></i>
              ))}
              <div className='bg-gray-200 rounded-md p-2 ml-2 w-10 h-6 text-sm text-blue-600'></div>
            </div>
            <div className="share flex gap-2">
              {Array(2).fill().map((_, index) => (
                <span key={index} className='bg-gray-200 p-2 w-6 lg:w-8 h-6 lg:h-8 flex items-center justify-center text-gray-500 text-sm md:text-md lg:text-lg rounded-full active:bg-slate-200'>

                </span>
              ))}
            </div>
          </div>
          <div className="keywords flex gap-2 flex-wrap items-center justify-start">
            {Array(3).fill().map((_, index) => (
              <span key={index} className='rounded-md w-20 p-3 bg-gray-200 shadow-md text-xs'></span>
            ))}
          </div>
          <div className='py-2 lg:py-4'><hr /></div>
          <div className="country-and-stock flex items-center justify-between">
            <div className="country-label rounded-md text-sm flex justify-end w-28 py-4 bg-gray-200"></div>
            <div className="total-stock rounded-md text-sm flex justify-end w-28 p-4 bg-gray-200"></div>
          </div>
          <div className='py-2 lg:py-4'><hr /></div>
          <div className="price gap-2 py-2 lg:py-4 h-32 rounded-md bg-gray-200 w-18 flex items-center justify-between">

            <div className="quantity flex gap-2 items-center py-2 lg:py-4 rounded-md bg-gray-200 w-18">
             </div>
          </div>
          <div className="btns pt-2 lg:py-4  flex gap-2 md:flex-row flex-col justify-between items-center">
            {Array(2).fill().map((_, index) => (
              <NavLink key={index} to={""} className="text-white w-full flex justify-center items-center gap-2 bg-gray-200 h-20 p-2 font-medium rounded-lg text-sm px-5 py-2.5">
                <i className="fa-solid"></i>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonSingleProduct;
