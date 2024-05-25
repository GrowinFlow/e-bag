import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';

import arrowImg from './../assets/images/arrow2.svg'

const OfferTimer = ({ endTime }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(endTime) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });


    return (
        <div className=" container p-4 mx-auto border-2 border-dashed border-gray-200 mb-1 rounded-lg text-md md:text-lg lg:text-xl">
            <div className="timer-heading flex justify-evenly sm:justify-between items-center">

                <div className="div flex justify-between items-center gap-12">
                    <div className="heading font-medium text-teal-700">
                    <div className="arrow absolute w-16 z-20">
            <img src={arrowImg} alt="arrow" className='relative top-2 -left-10 rotate-[135deg]' width="64"/>
        </div>
                        On Sale Now
                    </div>

                    <div className="timer-ends flex justify-evenly items-center gap-4 text-white">
                        <span className=' text-black hidden sm:flex'>Ending in</span>
                        {timeLeft.days !== undefined ? (
                    <span>
                        <div className="timer flex items-center gap-2">

                        <div className='w-10 p-2 bg-teal-700 rounded-md flex justify-center items-center shadow-md'>{timeLeft.days}</div><span className='text-black'>:</span>
                        <div className='w-10 p-2 bg-teal-700 rounded-md flex justify-center items-center shadow-md'>{timeLeft.hours}</div><span className='text-black'>:</span>
                        <div className='w-10 p-2 bg-teal-700 rounded-md flex justify-center items-center shadow-md'>{timeLeft.minutes}</div><span className='text-black'>:</span>
                        <div className='w-10 p-2 bg-teal-700 rounded-md flex justify-center items-center shadow-md'>{timeLeft.seconds}</div>
                        </div>

                           
                    </span>
                ) : (
                    <span>Offer Expired!</span>
                )}

                        
                    </div>

                </div>

                <div className="shop-more z-10 hidden md:flex">
                    <Buttons btnLink="/shop" btnText="Shop more"/>
                </div>


            </div>

            <div className="text-center">
               
            </div>
        </div>
    );
};

export default OfferTimer;








