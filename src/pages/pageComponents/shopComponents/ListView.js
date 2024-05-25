import React from 'react';
import { NavLink } from 'react-router-dom';

const ListView = ({ products }) => {
  return (
    <div className="flex flex-col gap-4 py-2 md:p-4 container mx-auto ">
      <div className="border-2 border-dashed border-gray-200 p-2 rounded-lg">

      {products.map((curElem, index) => {
        const { product_id, title, product_feature_img, current_price, description, discount_price, ratings } = curElem;

        return (
          <div key={index} className="grid grid-cols-4 rounded-lg shadow-md overflow-hidden p-2 gap-2 group transition-all ease-linear duration-300">
            <div className="col-span-1 h-44 bg-slate-100 rounded-lg overflow-hidden">
              <img src={product_feature_img} alt={title} className="object-cover w-full h-full transition-all ease-in duration-700 group-hover:scale-125"height={200} width={350} />
            </div>
            <div className="col-span-3">
              <div className="title text-lg py-1 font-medium md:text-2xl">{title}</div>
              <div className="description text-gray-500 text-sm lg:text-lg py-2">{description}</div>
              <div className="rating-and-price flex items-center justify-between py-2">
                <div className="price text-xl font-bold">${discount_price} <sub className="text-gray-400 line-through">{current_price}</sub></div>
                <div className="rating flex items-center">
                  <div className="stars flex justify-end items-center">
                    <svg aria-hidden="true" className="h-6 w-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{ratings}</span>
                </div>
              </div>
              <div className="btn">
                <NavLink to={`/product/${product_id}`} className="text-white w-full flex justify-center items-center gap-2 bg-teal-700 active:text-teal-700 active:bg-white focus:ring-4 focus:outline-none focus:ring-teal-500 font-medium rounded-lg text-sm px-5 py-2.5">
                  <i className="fa-solid fa-eye"></i> View
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default ListView;
