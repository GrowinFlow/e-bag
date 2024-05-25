import React from 'react'
import Logo from './../components/preComponent/Logo'

function Footer() {
    return (
        <div className='w-screen'>
            <footer className="footer-area bg-gray-100 container mx-auto p-4 ">


               <br /><br />
                <section className="footer flex justify-center bg-gray-100">
                    <p className="flex items-center gap-2 justify-center font-semibold text-xs md:text-md text-gray-500 py-2 mt-4 bg-gray-100 ">All Right Reserved &nbsp; | <Logo textSize="sm" /> | &nbsp;©  2024  </p>

                </section>
            </footer>



        </div>
    )
}

export default Footer