import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import ThanksNote from '../../../components/ThanksNote';

function ContactForm() {
        const [state, handleSubmit] = useForm("mdoqjvdj");
        if (state.succeeded) {
            return <ThanksNote heading="Thanks for joining!" note="Stay up to date and move work forward with 
                "/>
        }

  return (
    <>
    <div className="form-container container mx-auto mt-8 p-4">

<h1 className='flex justify-center text-xl md:text-4xl font-bold py-4'>Feel Free </h1>


    <form className="mb-6"  
    onSubmit={handleSubmit}>

      <div className="mb-6 ">
         <label for="email" 
         className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
         <input 
         type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5" 
         placeholder="name@mail.com" 
         required 
         autoComplete='off'/>

      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>

      <div className="mb-6">
         <label 
         for="message" 
         className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
         <textarea id="message" name='message' rows="4" 
         className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500" 
         placeholder="Your message..."></textarea>
               <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>

      <button 
      type="submit" 
      className="text-white bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-500  w-full rounded-lg text-sm px-5 py-2.5 mb-2 block"
      disabled={state.submitting}>Send message</button>
   </form>
    </div>
    
    </>
  )
}

export default ContactForm