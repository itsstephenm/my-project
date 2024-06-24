import Image from 'next/image'
import React from 'react'
import About2 from '../public/assets/About2.png';
import Link from 'next/link';


const Aboout = () => {
  return (
    <div id='about' className='border-b border-gray-300 w-full md:grid-cols-3 md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
      <div col-span-2>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'> Who I Am</h2>
          <p>A little More About me </p>
          <p className='py-2 text-gray-600'>
            Name is Stephen Muregwi and i am currently enrolled at the National University of Science and Technology in Zimbabwe, Bulawayo. Currently persuing a degree in Computer Science, just finished my second year and
             im getting into my third year as a Computer Scientist.  
          </p>
          <p className='py-2 text-gray-600'>
            Where i look forward to opportunies as an intern or an attachment program to gain better experience in the field.
          </p>
          <p className='py-2 text-gray-600'>
            As you can see, judging from my own site i have the ability to grow as a front-end developer given 
             a proper opportunity to work with brilliant minds alike in the field. As the page is very responsive and works on multiple platforms.
          </p>
            <Link href={'/#projects'}>
            <p className='py-2 underline cursor-pointer  text-[#5651e5]'>Check out some of my projects </p>
            </Link>
      </div>
      <div className='py-4 w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <Image className='rounded-xl' src={About2.src} alt="" width={2000} height={2000} />
      </div>
      <p className=' text-gray-600 pt-28'>
        Im not limited to web developing only as i am able to diagnose and resolve computer issues, network or printer problems, email, internet and local area network access points.
	      Also capable of installing different operations systems on computer devices
        i.e. windows 7/8/10/11.
        I possess good designing skills for suitable application user interfaces/user experience and graphic designs.   
        <Link href='/#Contactsection' className='text-[#5651e5] underline'>Get-In-touch</Link> 
      </p>
      <p>
      
      </p>
    </div>
    </div>
    
  )
}

export default Aboout
