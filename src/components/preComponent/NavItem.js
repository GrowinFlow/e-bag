import React from 'react'
import { NavLink } from 'react-router-dom'

function NavItem(props) {
  return (
    <>
        <li className='list-none mx-1'>
        <NavLink to={props.toLink || " "} className={({ isActive }) => isActive ? "transition-colors duration-500 ease-in-out block md:flex  justify-center items-center py-2 px-3 bg-white md:bg-transparent w-full rounded md:rounded-none md:hover:bg-transparent  border-b-4 border-teal-700 text-lg text-black md:text-sm lg:text-lg": "block md:flex justify-center items-center py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black text-gray-500  text-lg md:text-sm lg:text-lg"} aria-label={props.ariaLabel}>{props.linkName}</NavLink>
      </li>
    </>
  )
}


export default NavItem