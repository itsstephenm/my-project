import Link from 'next/link'
import React from 'react'

const ThankYouText = () => {
  return (
    <div className='text-xenter w-full h-screen'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <h1 className='uppercase text-sm'>thank you for contacting Stephen!!</h1>
        <p className='text-[#5652e5]'>Note he`ll get back to you once he`s Online</p>
        
      </div>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          <Link className='text-[#5651e5] underline' href="/#Contactsection"> Back</Link>
      </div>
    
    </div>
  )
}

export default ThankYouText
