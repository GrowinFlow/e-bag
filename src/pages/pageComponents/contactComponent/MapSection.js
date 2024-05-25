import React from 'react'
import mapImg from './../../.././assets/images/map.webp'



function MapSection() {
  return  (
    <div>
        <div 
            className='h-[120px] w-screen bg-cover bg-fixed' 
            style={{ backgroundImage: `url(${mapImg})` }}>
        </div>

        {/* <div className='relative h-80 w-screen'>
      <iframe
        className='absolute top-0 left-0 w-full h-full z-0'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231097.1359702553!2d67.18469853015856!3d25.17309900277464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1715958722687!5m2!1sen!2s"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
      ></iframe>

    </div> */}

    </div>
  )
}

export default MapSection