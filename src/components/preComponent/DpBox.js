import React from 'react'

function DpBox(props) {
  return (
    <div>
        <div className="dp cursor-pointer w-8 md:w-10 h-8 md:h-10 shadow-sm rounded-md md:rounded-full bg-gray-400 order-1 md:order-2 overflow-hidden flex items-center justify-center">
                        <img src={props.dpLink} alt="dp" className='object-fit w-full h-full' height={10} width={10} />
                    </div>

    </div>
  )
}

export default DpBox