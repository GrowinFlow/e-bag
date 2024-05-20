import React, { useState, useEffect } from 'react';

function LazyCarousel() {
  const [sliderItems, setSliderItems] = useState([
    'fa-wizards-of-the-coast',
    'fa-shopify',
    'fa-medapps',
    'fa-nfc-directional',
    'fa-mandalorian',
    'fa-pagelines',
    'fa-digg',
    'fa-pied-piper-alt',
    'fa-airbnb'
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [sliderItems]);

  return (
    <div className="brands-log overflow-hidden mx-auto container p-4">
      <ul className="b-logo text-4xl md:text-7xl text-gray-700 list-none flex py-2 items-center">
        {sliderItems.map((icon, index) => (
          <li key={index} className={`slider-item ${index === currentIndex ? 'active' : ''}`}>
            <i className={`fab ${icon}`}></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LazyCarousel;
