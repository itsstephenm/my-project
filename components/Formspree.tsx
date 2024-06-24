import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mbjnnaao");
  if (state.succeeded) {
      return <p className='pl-4 pt-32 text-[#5651e5]'>Thank you for contacting Stephen, Note: he`ll get back to you once he`s online!</p>;
  }
  return (
    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
      <div className='p-4'>
        <form onSubmit={handleSubmit}>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>Name</label>
                      <input className='border-2 rounded-lg p-3 flex border-gray-300' 
                        id='Name'
                        type='text'
                        name='Name'
                        />
                        <ValidationError 
                        prefix="Name" 
                        field="text"
                        errors={state.errors}
                  />
                    </div>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>Phone number</label>
                      <input className='border-2 rounded-lg p-3 flex border-gray-300' 
                      type='text'
                      id='PhoneNumber'
                      name='PhoneNumber'
                      />
                      <ValidationError 
                        prefix="PhoneNumber" 
                        field="text"
                        errors={state.errors}
                  />
                    </div>
              </div>
              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2' htmlFor="email">Email</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' 
                    id="email"
                   type="email" 
                   name="email"
                  />
                 
              </div>

              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' 
                  id="subject"
                  type='text'
                  name='subject'
                  />
                    <ValidationError 
                    prefix="Subject" 
                    field="subject"
                    errors={state.errors}
                  />
              </div>
              
              <div className='flex flex-col py-2'>
              <label className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows={10}
                    id="message"
                    name="message"
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
              </div>
                  <button className='w-full p-4 text-gray-100 mt-4' type="submit" disabled={state.submitting}>
                    Send Message
                  </button>
        </form>
      </div>
    </div>
    
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;