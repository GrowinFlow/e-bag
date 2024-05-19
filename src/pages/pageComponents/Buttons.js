import React from 'react'
import { useNavigate } from 'react-router-dom'


function Buttons(props) {
    const btnNavigate = useNavigate()
    function navigateTo(link){
        btnNavigate(link)
    }
  return (
    <>
    <button onClick={()=>{navigateTo(props.btnLink)}} type="button" className="text-white w-auto bg-gradient-to-br from-teal-600 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">{props.btnText}</button>

    </>
  )
}

export default Buttons