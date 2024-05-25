import React from 'react'
import { useNavigate } from 'react-router-dom'


function Buttons(props) {
    const btnNavigate = useNavigate()
    function navigateTo(link){
        btnNavigate(link)
    }
  return (
    <>
    <button onClick={()=>{navigateTo(props.btnLink)}} aria-label='button' type="button" className="text-white w-auto bg-teal-700 focus:outline-none focus:ring-teal-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">{props.btnText}</button>

    </>
  )
}

export default Buttons