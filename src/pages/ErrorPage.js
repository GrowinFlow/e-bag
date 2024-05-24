import React from 'react'
import Buttons from '../components/Buttons'

const ErrorPage = () => {
  return (
    <>

<section className="bg-white transition-all ease-linear duration-300">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl bg-gradient-to-br from-teal-600 to-green-500 bg-clip-text text-transparent hover:bg-gradient-to-b">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something's missing.</p>
            <p className="mb-4 text-lg font-light text-gray-500">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
           <Buttons btnLink="/" btnText="Go To Home" />
        </div>   
        <div className="h-[32vh]"></div>
    </div>
</section>
    
    
    </>
  )
}

export default ErrorPage