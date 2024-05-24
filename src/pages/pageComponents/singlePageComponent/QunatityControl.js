import React from 'react'

function QunatityControl(props) {
  return (
    <div className=' text-sm md:text-md flex items-center'>
      <button
          className="p-2 w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 active:bg-gray-200 shadow-md active:text-xl hover:text-teal-700 bg-white"
          onClick={props.decrement}
        >
          <i className="fa-solid fa-minus"></i>
        </button>
  
        <span className="flex justify-center bg-transparent min-w-10 outline-none border-0 text-sm md:text-md lg:text-lg text-teal-700">{props.quant}</span>
  
        <button
          className="p-2 w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 active:bg-gray-200 shadow-md active:text-xl hover:text-teal-700 bg-white"
          onClick={props.increment}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
    </div>
  )
}

export default QunatityControl