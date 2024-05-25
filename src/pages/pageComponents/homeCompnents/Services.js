import React from 'react'

function Services() {
    return (
        <>



            <section className="bg-whit">
                <div className="flex md:grid px-4 py-8 container mx-auto grid-cols-auto md:grid-cols-3 gap-3 md:gap-8 md:flex-row flex-col">

                    <div className="p-2 text-xs md:text-md rounded-md md:rounded-lg min-w-24 bg-slate-100 shadow-lg border-2 border-gray-200 h-58 flex flex-col justify-center items-center">
                        <div className="bg-white rounded-lg md:rounded-full p-2 md:p-3 shadow-md overflow-hidden">

                            <i className="fa-solid fa-truck font-bold text-teal-700  flex justify-center items-center text-lg lg:text-2xl"></i>
                        </div>
                        <div className="heading text-gray-500 py-4 min-w-24">Fast and Free Delivery</div>
                    </div>


                    <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-8">

                        <div className="p-2 text-xs md:text-md rounded-md md:rounded-lg min-w-24 bg-slate-100 shadow-lg border-2 border-gray-200 h-28 flex flex-col justify-center items-center">
                            <div className="bg-white rounded-lg md:rounded-full p-2 shadow-md overflow-hidden">

                                <i className="fa-solid fa-user-shield font-bold text-teal-700  flex justify-center items-center text-lg"></i>
                            </div>
                            <div className="heading text-gray-500 py-4 min-w-24 text-center">Non-Contact Shipping</div>
                        </div>


                        <div className="p-2 text-xs md:text-md rounded-md md:rounded-lg min-w-24 bg-slate-100 shadow-lg border-2 border-gray-200 h-28 flex flex-col justify-center items-center">
                            <div className="bg-white rounded-lg md:rounded-full p-2 shadow-md overflow-hidden">

                                <i className="fa-solid fa-hand-holding-dollar font-bold text-teal-700  flex justify-center items-center text-lg"></i>
                            </div>
                            <div className="heading text-gray-500 py-4 min-w-24 text-center">Money Back Guarantee</div>
                        </div>

                    </div>

                    <div className="p-2 text-xs md:text-md rounded-md md:rounded-lg min-w-24 bg-slate-100 shadow-lg border-2 border-gray-200 h-58 flex flex-col justify-center items-center">
                        <div className="bg-white  rounded-lg md:rounded-full p-2 md:p-3 shadow-md overflow-hidden">
                            <i className="fa-solid fa-comments-dollar font-bold text-teal-700 text-xl lg:text-2xl"></i>
                        </div>

                        <div className="heading text-gray-500 py-4 min-w-24">Fast and Secure Paymemt</div>
                    </div>

                </div>
            </section>






        </>
    )
}

export default Services