import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo(props) {
  return (
    <>
    <NavLink to="/" className={`flex gap-4 ${`text-`+props.textSize} font-bold`}>
        <span className='flex items-center '>
         <i className="fa-solid fa-e"></i>
         <b className='text-black'>&nbsp;-&nbsp;</b>
         <i className="fa-solid fa">B</i>
         <i className="fa-solid fa-bag-shopping fa-bounce font-bold text-teal-700 px-[2px]"></i>
         <i className="fa-solid fa">G</i>
         </span>
    </NavLink>
    </>
  )
}

export default Logo