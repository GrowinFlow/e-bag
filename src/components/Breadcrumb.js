import React from 'react'
import { NavLink } from 'react-router-dom'

function Breadcrumb(props) {
    return (
        <>
            <div className="breadcrumb_navigation flex gap-4 items-center text-gray-400 text-xs md:text-md lg:text-lg">
                <NavLink to={props.link_1} className="hover:text-black">{props.text_1}</NavLink>
                <i className="fa-solid fa-chevron-right"></i>
                <NavLink to={props.link_2} className="hover:text-black">{props.text_2}</NavLink>
                <i className="fa-solid fa-chevron-right"></i>
                <NavLink to={props.link_3} className="hover:text-black">{props.text_3}</NavLink>
                <i className="fa-solid fa-chevron-right"></i>
                <NavLink className="text-black cursor-default">{props.text_4}</NavLink>
            </div>
        </>
    )
}

export default Breadcrumb