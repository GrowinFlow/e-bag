import React from 'react'

function Trusted() {
    return (
        <>
            <div className="w-screen">
                <div className="container mx-auto flex justify-center">
                    <div className="flex flex-col p-4 bg-white shadow-lg md:rounded-lg w-full">

                   
                    <div className="brands heading flex justify-center items-center text-lg md:text-2xl font-semibold text-gray-400 py-4 pb-6" >
                        Trusted by 100+ Compnies
                    </div>
                    <div className="brands-log ">

                        <ul className="b-logo text-4xl md:text-7xl text-gray-700 list-none flex flex-wrap py-2 justify-between items-center">

                            <li>
                            <i className="fa-brands fa-amazon-pay"></i>
                            </li>

                            <li>
                                <i className='fa-brands fa-shopify'></i>
                            </li>

                            <li>
                            <i className="fa-brands fa-medapps"></i>
                            </li>

                            <li>
                            <i className="fa-brands fa-nfc-directional"></i>
                            </li>

                            <li>
                            <i className="fa-brands fa-mandalorian"></i>
                            </li>



                        </ul>

                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trusted