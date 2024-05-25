import React from 'react'
import Logo from './../components/preComponent/Logo'

function Footer() {
    return (
        <div className='w-screen'>
            <footer className="footer-area bg-gray-100 container mx-auto p-4 ">


               <br /><br />
                <section className="footer flex justify-center bg-gray-100">
                    <p className="w-1/2 flex gap-2 justify-center text-center font-semibold text-xs text-gray-500 py-2 mt-4 bg-gray-100"><span className='bg-gray-100 text-gray-500'>All Right Reserved &nbsp; | <Logo /> | &nbsp;©  2024</span>  </p>

                </section>
            </footer>



        </div>
    )
}

export default Footer