import React from 'react'
import { NavLink } from 'react-router-dom'

function NavItem(props) {
  return (
    <>
        <li className='list-none mx-1'>
        <NavLink to={props.toLink || " "} className={({ isActive }) => isActive ? "transition-colors duration-200 ease-in-out  block md:flex  justify-center items-center py-2 px-3 bg-white md:bg-transparent w-full rounded md:hover:bg-transparent  bg-gradient-to-br from-teal-600 to-green-500 bg-clip-text text-transparent hover:bg-gradient-to-b shadow-sm border-1 border-gray-900 text-lg md:text-sm lg:text-lg": "block md:flex  justify-center items-center py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700  text-lg md:text-sm lg:text-lg"}>{props.linkName}</NavLink>
      </li>
    </>
  )
}

export default NavItem