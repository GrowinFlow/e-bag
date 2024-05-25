import React, { useState } from 'react'
import Logo from './preComponent/Logo'
import NavItem from './preComponent/NavItem'
import DpBox from './preComponent/DpBox';
import { NavLink, Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import dpImg from './../assets/images/dp.webp'


function Navbar() {
    const { total_item } = useCartContext();
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(prevShow => !prevShow);
    }

    return (

        <div className='w-screen bg-gray-100 shadow-lg sticky top-0 z-50'>
            <nav className='container mx-auto grid grid-rows-[] md:grid-rows-1 grid-cols-2 md:grid-cols-9 justify-between gap-6 py-2 px-4 flex-wrap'>
                <ul className='order-1 col-span-1 flex items-center'>
                    <li>

                        <Logo textSize="xl" />
                    </li>
                </ul>

                <ul className={`transition-all duration-300 ease-in-out pb-4 md:py-0  absolute md:relative bg-gray-100 mx-auto right-[1px] top-12 md:top-0 sm:w-28  flex-col md:h-auto md:flex-row md:items-center justify-center md:px-8 md:justify-end gap-4 md:gap-2 order-3 md:order-2 col-span-2 md:col-span-7  ${show ? 'block' : 'hidden'} md:flex`}>

                    <li>
                        <NavItem ariaLabel="Visit Home Page" toLink="/" linkName={
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M180-120q-25 0-42.5-17.5T120-180v-76l160-142v278H180Zm140 0v-160h320v160H320Zm360 0v-328L509-600l121-107 190 169q10 9 15 20.5t5 24.5v313q0 25-17.5 42.5T780-120H680ZM120-310v-183q0-13 5-25t15-20l300-266q8-8 18.5-11.5T480-819q11 0 21.5 3.5T520-804l80 71-480 423Z" /></svg>
                            </>
                        } />
                    </li>

                    <li>
                        <NavItem ariaLabel="Visit Shop and Shoping now" toLink="/shop" linkName={
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M160-720v-80h640v80H160Zm0 560v-240h-40v-80l40-200h640l40 200v80h-40v240h-80v-240H560v240H160Zm80-80h240v-160H240v160Zm-38-240h556-556Zm0 0h556l-24-120H226l-24 120Z" /></svg>
                            </>
                        } />
                    </li>

                    <li className='hidden md:block'>
                        <NavItem ariaLabel="Control Your Carts and Check out" toLink="/cart" linkName={
                            <div className='flex items-center gap-4 md:gap-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
                                <span className='rounded-full bg-teal-700 text-white min-w-[18px] max-w-[20px] h-[18px] flex items-center justify-center relative md:-top-2 right-2 text-[10px]'>{total_item}</span>
                            </div>} />
                    </li>
                    <li>
                        <NavItem ariaLabel="Contact us , feel free" toLink="/contact" linkName={
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-440v-360q0-17 11.5-28.5T520-840h280q17 0 28.5 11.5T840-800v200q0 17-11.5 28.5T800-560H600L480-440Zm80-200h200v-120H560v120Zm0 0v-120 120Zm238 520q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
                            </>
                        } />
                    </li>
                </ul>

                <ul className='order-2 md:order-3 col-span-1 flex justify-end items-center gap-2'>


                    <li className='md:hidden small-screen-cart'>
                        <NavLink to="/cart">
                            <div className='flex items-center md:gap-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
                                <span className='rounded-full bg-teal-700 text-white min-w-[18px] max-w-[20px] h-[18px] flex items-center justify-center relative -top-2 right-2 text-[10px]'>{total_item}</span>
                            </div>
                        </NavLink>
                    </li>


                    <li>
                        <div className="dp-section group">
                            <DpBox dpLink={dpImg} />





                            <div className="shadow-lg z-50 group-hover:block hover:block hidden absolute right-10 md:right-16 top-2 text-base list-none bg-white divide-y" id="user-dropdown">
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@user.com</span>
                                </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">

                                    <li>
                                        <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className='md:hidden order-2 md:order-1'>

                            <button aria-label='toggleBtn' onClick={toggle} className='outline-none'>

                                <span className="block w-8 h-8 md:h-10 md:w-10 py-1 md:px-3 bg-gray-100 hover:bg-white rounded-md bg-transparent text-gray-500 hover:shadow-sm border-2 border-teal-700 shadow-md cursor-pointer">
                                    {show ?
                                        (<i className="fa-solid fa-x"></i>) :
                                        (<i className="fa-solid fa-bars"></i>)}
                                </span>

                            </button>
                        </div>
                    </li>


                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
