import React from 'react'
import MapSection from './pageComponents/contactComponent/MapSection'
import NewsLetter from './pageComponents/homeCompnents/NewsLetter'
import ContactForm from './pageComponents/contactComponent/ContactForm'


function Contact() {
  return (
    <>
      <ContactForm />
      <MapSection />

      <NewsLetter />
    </>
  )
}

export default Contact