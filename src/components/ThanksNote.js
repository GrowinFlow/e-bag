import React from 'react'
function ThanksNote(props) {
  return (
    <>


<div className="my-2 w-full h-56 p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8">
    <h5 className="mb-2 text-3xl font-bold text-teal-700 ">{props.heading}</h5>
    <p className="mb-5 text-base text-black sm:text-lg">{
    props.note}
    <b> E - B<i className='fa-solid fa-bag-shopping fa-bounce font-bold text-teal-700  px-[2px]'></i>G.</b>
    </p>
</div>

    </>
  )
}

export default ThanksNote