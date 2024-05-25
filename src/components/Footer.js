import React from 'react'
import NavItem from './../components/preComponent/NavItem'
import Buttons from './Buttons'
import Logo from './../components/preComponent/Logo'
import NewsLetter from '../pages/pageComponents/homeCompnents/NewsLetter'


function Footer() {
    return (
        <div className='w-screen'>
            <footer className="footer-area bg-gray-100 container mx-auto p-4 ">


               <br /><br />
                <section className="footer flex justify-center">
                    <p className="w-1/2 flex gap-2 justify-center text-center font-semibold text-xs text-gray-500 py-2 mt-4">All Right Reserved &nbsp; | <Logo /> | &nbsp;©  2024  </p>

                </section>
            </footer>



        </div>
    )
}

export default Footer