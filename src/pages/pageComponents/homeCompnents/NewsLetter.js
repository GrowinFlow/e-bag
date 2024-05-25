import React from 'react'
import Buttons from '../../../components/Buttons'

function NewsLetter() {
  return (
    <>

<div className="news-bg px-4 bg-white flex items-center justify-center container mx-auto">

    <div className="newsL z-40 bg-white p-4 pb-0 rounded-md md:rounded-lg shadow-lg w-full relative top-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 grid-rows-1 gap-2 lg:gap-6">
        <div className="headings hidden md:block lg:col-span-7">
            <h1 className='text-2xl lg:text-4xl font-semibold'>Sign up for our newsletter</h1>
            <p className='text-sm lg:text-lg py-2 text-gray-500'>Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
        </div>
    
<div></div>

    <div className="join col-span-4">
                                <div className="heading">
                                    <p className="text-xl font-bold pb-4">Join a Newsletter</p>
                                </div>
                                <div className="form">

                                    <div className=" mx-auto">
                                        <div className="flex ">

                                            <div className="relative rounded-full flex  gap-2 w-full">
                                                <input type="email" className="shadow-lg p-2 text-sm text-gray-900 bg-gray-50 rounded-md focus:outline-teal-700 w-full" placeholder="Input your email here..." required="" />
                                                <Buttons btnText={<i className="fa-solid fa-paper-plane "></i>}/>
                                        
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="links py-2 my-2">
                                    <ul className="flex gap-4 md:gap-2 w-1/3 justify-start md:justify-between items-center text-black text-sm ">


                                        <li className=" flex justify-center items-center p-2 h-[25px] w-[25px] rounded-full border-[1px] border-gray-100 cursor-pointer hover:bg-white hover:border-teal-700 hover:text-teal-700">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </li>

                                        <li className=" flex justify-center items-center p-2 h-[25px] w-[25px] rounded-full border-[1px] border-gray-100 cursor-pointer hover:bg-white hover:border-teal-700 hover:text-teal-700">
                                            <i className="fa-brands fa-youtube"></i>
                                        </li>

                                        <li className=" flex justify-center items-center p-2 h-[25px] w-[25px] rounded-full border-[1px] border-gray-100 cursor-pointer hover:bg-white hover:border-teal-700 hover:text-teal-700">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </li>

                                        <li className=" flex justify-center items-center p-2 h-[25px] w-[25px] rounded-full border-[1px] border-gray-100 cursor-pointer hover:bg-white hover:border-teal-700 hover:text-teal-700">
                                            <i className="fa-brands fa-x-twitter"></i>
                                        </li>

                                        <li className=" flex justify-center items-center p-2 h-[25px] w-[25px] rounded-full border-[1px] border-gray-100 cursor-pointer hover:bg-white hover:border-teal-700 hover:text-teal-700">
                                            <i className="fa-brands fa-pinterest-p "></i>
                                        </li>

                                    </ul>
                                </div>
                            </div>
    </div>
</div>
                         
    </>
  )
}

export default NewsLetter