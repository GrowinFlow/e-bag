import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';
import Breadcrumb from '../components/Breadcrumb';


const API = 'https://raw.githubusercontent.com/GrowinFlow/json/main/data.json';

function SingleProduct() {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext(); // Ensure correct spelling
  const { id } = useParams();

  const correctId = parseInt(id) - 1; // Ensure id is parsed as integer
  const correctProduct = singleProduct[correctId] || {}; // Ensure correctProduct is defined

  useEffect(() => {
    console.log('Product ID:', id); // Debug log
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);


  const { product_id, title, product_feature_img, current_price, category, description, discount_percentage, discount_price, ratings, made_country, keywords, product_stock, product_images } = correctProduct;
  console.log(correctProduct);


  if (isSingleLoading) {
    return <div>Loading . . .. .</div>
  }
  return (

    <>
      <div className="container mx-auto transition-all ease-linear duration-300 overflow-x-hidden">

        <div className="p-4 flex flex-col tems-center">

          {/* breadcrumb_navigation  */}
          <Breadcrumb link_1={"/"} text_1="Home" link_2={"/products"} text_2={category} text_3={title} />
        </div>


        <div className="product_veiw px-4 flex flex-col justify-center md:grid grid-cols-5 gap-2 ">



          {/* images  */}
          <div className="product-img-area flex flex-col md:col-span-2">
            <div className="feature-image w-[90%] ">
              <img src={product_feature_img} alt="" />
            </div>


            <div className="product-more-images absolute gap-4 items-center justify-start">
              {
                product_images && product_images.map((key, index) => (

                  <div className="img ring-2 ring-teal-700 rounded-md w-10 h-10 md:w-10 overflow-hidden p-[1px] group relative top-4 mt-4">
                    <img src={key} alt="" key={index} className='rounded-md object-fit group-hover:scale-110 cursor-pointer transition-all ease-linear duration-300' />
                  </div>

                ))
              }

            </div>
          </div>


          <div className="product-details-and-cart md:col-span-3 px-4">

            <div className="product-title text-xl md:text-2xl lg:text-3xl lg:pb-4">
              <h1>{title}</h1>
            </div>

            <div className="discription text-xs md:text-sm lg:text-md text-gray-500 lg:py-4">
              <p>{description}</p>
            </div>

            <div className="rating-and-share flex justify-between items-center py-2 lg:py-4">
              <div className="rating flex items-center gap- text-xs md:text-sm lg:text-md text-yellow-300">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <span className='rounded-md p-[1px] ml-2 px-2 text-sm bg-yellow-300 text-blue-600'>
                  {ratings}
                </span>
              </div>

              <div className="share flex gap-2">
                <span className='p-2 w-6 h-6 flex items-center justify-center shadow-md text-sm md:text-md lG:text-lg rounded-full bg-slate-200'>
                  <i class="fa-solid fa-share-nodes"></i>
                </span>
                <span className='p-2 w-6 h-6 flex items-center justify-center text-sm md:text-md lG:text-lg rounded-full active:bg-slate-200 active:shadow-md group'>
                  <i class="fa-regular fa-heart group-hover:text-rose-500"></i></span>
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

            <div className="country-and-stock flex items-center justify-between ">

              <div className="country-label text-sm flex item justify-end">
                <p>Made in <span className='text-gray-500'>{made_country}</span></p>
              </div>
              <div className="total-stock text-sm py-2">
                Avaibale: <i> {product_stock}</i>
                <span className='text-xs text-gray-500'>{product_stock > 0 ? " Items In Stock" : "Out of Stock"}</span>
              </div>
            </div>

            <div className='py-2 lg:py4'>
              <hr />
              </div>

            <div className="price gap-2 lg:py-4 py-2 flex items-center justify-between">
              <div className="current-price_dicount text-2xl">$
                <span className='text-bold text-teal-700'>{discount_price}</span>
                <sub className='line-through text-gray-500'>{current_price}</sub>
              </div>
              <div className="discount-perscent text-2xl">
                <span className='text-black'>{discount_percentage}<sub className='text-teal-700 text-sm'>% off</sub></span>
              </div>
            </div>

            <div className="quantity flex gap-2 items-center py-2 lg:py4">
              <span>Quantity</span>
              <button className='p-2 w-10 h-10 active:bg-gray-200 shadow-md active:text-xl hover-text-teal-700 bg-white'><i class="fa-solid fa-minus"></i></button>
              <span type="number" readOnly className=' bg-transparent min-w-10 outline-none border-0'>0</span>
              <button className='p-2 w-10 h-10 active:bg-gray-200 shadow-md active:text-xl hover-text-teal-700 bg-white'><i class="fa-solid fa-plus"></i></button>
            </div>

            <div className="btns pt-2 lg:py-4 flex gap-2 md:flex-row flex-col justify-between items-center">
            <NavLink to={`/cart`} className="text-white w-full flex justify-center items-center gap-2 bg-gradient-to-br from-teal-600 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5">
  <i className="fa-solid fa-cart-shopping"></i>Add to cart
</NavLink>
            <NavLink to={`/cart`} className="text-white w-full flex justify-center items-center gap-2 bg-gradient-to-br from-teal-600 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5">
            <i class="fa-solid fa-truck"></i>Buy now
</NavLink>

            </div>

          </div>





        </div>



      </div>

    </>
  )
}

export default SingleProduct
