import React from 'react'
import heroImg from './../../../assets/images/heroImg.webp'
import Logo from '../../../components/preComponent/Logo'
import Buttons from '../../../components/Buttons'



function HeroSection() {
  return (
    <>
<section className="bg-whit">
    <div className="grid px-4 py-8 container mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <sup>Welcome on</sup>
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white flex items-center gap-2"><Logo /> <sub className='text-lg'>Store</sub></h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores necessitatibus alias. Deleniti necessitatibus nemo dolor minus deserunt veritatis tempore cupiditate accusantium recusandae. Veritatis eligendi nisi quis, error neque dolore, quo consectetur voluptatibus iste iusto distinctio debitis dolores numquam adipisci temporibus maiores ea. Soluta quisquam molestias voluptates illum? Iste quod nesciunt ducimus, dolores veniam praesentium!
            </p>
            <div className="btn">
            <Buttons btnText="Read more" btnLink="/about"/>
        </div>
        </div>


        <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img src={heroImg} alt="heroImg" height="800" fetchpriority="high" width="740"/>

        </div>                

    </div>
</section>




    </>
  )
}

export default HeroSection