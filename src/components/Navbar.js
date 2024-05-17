import React, { useState } from 'react'
import Logo from './preComponent/Logo'
import NavItem from './preComponent/NavItem'
import DpBox from './preComponent/DpBox';

function Navbar() {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(prevShow => !prevShow);
    }

    return (

        <div className='w-screen bg-gray-100 shadow-lg'>
            <nav className='container mx-auto grid grid-rows-[] md:grid-rows-1 grid-cols-2 md:grid-cols-9 justify-between gap-6 py-2 px-4 flex-wrap'>
                <ul className='order-1 col-span-1 flex items-center'>
                    <Logo textSize="xl" />
                </ul>

                <ul className={`transition-opacity duration-300 ease-in-out pb-4 md:py-0   flex-col md:flex-row md:items-center justify-center md:justify-end gap-4 md:gap-2 order-3 md:order-2 col-span-2 md:col-span-7  ${show ? 'block' : 'hidden'} md:flex`}>
                    <NavItem toLink="/" linkName="Home" />
                    {/* <NavItem toLink="/about" linkName="About" /> */}
                    <NavItem toLink="/products" linkName="Products" />
                    <NavItem toLink="/singleproduct" linkName="SingleProduct " />
                    <NavItem toLink="/contact" linkName="Contact us" />

                    <NavItem toLink="/cart" linkName={<div className='flex items-center gap-4 md:gap-0'><i className="fa-solid fa-cart-shopping"></i><span className='rounded-full bg-gradient-to-br from-teal-600 to-green-500 hover:bg-gradient-to-bl text-white min-w-[18px] max-w-[20px] h-[18px] flex items-center justify-center relative md:-top-2 text-[10px]'>24</span></div>} />
                </ul>

                <ul className='order-2 md:order-3 col-span-1 flex justify-end items-center gap-2'>

                    <div className='md:hidden order-2 md:order-1'>

                        <button onClick={toggle} className='outline-none'>

                            <span className="block border-2 border-gray-300 w-10 py-1 px-3 hover:bg-white rounded bg-transparent hover:text-teal-700 hover:shadow-sm border-1 border-transparent hover:border-gray-900 cursor-pointer">
                                {show ?
                                    (<i className="fa-solid fa-x"></i>) :
                                    (<i className="fa-solid fa-bars"></i>)}
                            </span>

                        </button>
                    </div>


                    <div className="dp-section group">
                        <DpBox dpLink="https://img.freepik.com/free-photo/handsome-handsome-guy-posing-against-white-wall_176420-32957.jpg?w=996&t=st=1715931909~exp=1715932509~hmac=b6ec2cedf2350b0fb475bc6ee5bbe53a0f7e9a7b0ed1a2c93d24ea837a3a94c3" />





                        <div className="shadow-lg z-50 group-hover:block hover:block hidden absolute right-32 md:right-12 top-2 text-base list-none bg-white divide-y" id="user-dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@user.com</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">

                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>




                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
