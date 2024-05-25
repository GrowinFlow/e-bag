import React from 'react';
import { NavLink } from 'react-router-dom';

const GridView = ({ products = [] }) => {
    return (
        <>
        <div className='container mx-auto py-2  md:p-4 flex transition-all ease-linear duration-300'>
            <div className="flex gap-4 border-2 border-dashed border-gray-200 p-2 rounded-lg flex-wrap md:grid-cols-2 md:grid lg:grid-cols-3 xl:grid-cols-4 px-4">
                {products.map((curElem) => {
                    const { product_id, title, product_feature_img, current_price, discount_percentage, discount_price, ratings } = curElem;
                    return (
                        <div key={product_id} className="relative flex w-full md:w-full md:max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md group">
                            <span className="relative  flex h-60 overflow-hidden rounded-xl justify-center">
                                <img className="transition-all ease-linear duration-300 group-hover:scale-110 object-cover" src={product_feature_img} alt={title} height={250} width={250}/>
                                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{discount_percentage}% OFF</span>
                            </span>
                            <div className="mt-4 px-5 pb-5">
                                <span>
                                    <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
                                </span>
                                <div className="mt-2 mb-5 flex items-center justify-between">
                                    <p>
                                        <span className="text-xl lg:text-2xl font-bold text-slate-900">${discount_price}</span>
                                        <span className="text-xs lg:text-sm text-slate-900 line-through">${current_price}</span>
                                    </p>
                                    <div className="flex items-center ">
                                        <div className="stars flex justify-end items-center">
                                            <svg aria-hidden="true" className="h-6 w-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </div>
                                        <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{ratings}</span>
                                    </div>
                                </div>
                                <NavLink to={`/product/${product_id}`} className="text-white w-full flex justify-center items-center gap-2  bg-teal-700 active:text-teal-700 active:bg-white focus:ring-4 focus:outline-none focus:ring-teal-500 font-medium rounded-lg text-sm px-5 py-2.5">
                                    <i className="fa-solid fa-eye"></i>View
                                </NavLink>
                            </div>
                        </div>
                    );
                })}
            </div>
            </div>
        </>
    );
};

export default GridView;
