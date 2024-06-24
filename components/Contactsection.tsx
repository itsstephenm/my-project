'use client';
import React from 'react'
import contactme2 from '../public/assets/contactme2.png';
import Image from 'next/image';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Link from 'next/link';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';
import Formspree from '../components/Formspree'


const Contactsection = () => {
  
  

  return (
    <div id='Contactsection' className='py-16 w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className=' pl-4 text-xl tarcking-widest uppercase text-[#5651e5]'>Contact</p>
          <h2 className='pl-4'>Get in touch</h2>
          <div className='grid lg:grid-cols-5 gap-8'>



                 {/*Left-side */}
      <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-1'>
          <div className='lg:p-4 h-full'>
              <div>
                <Image className='rounded-3xl p-4' src={contactme2.src} alt="/" height={500} width={800}/>
              </div>
              <div className='pl-4'>
                <h2 className='py-4'>Stephen Junior Muregwi</h2>
                <p className='text-[#5651e5] hover:cursor-pointer'>Front End Developer</p>
                <p className='py-4'>I am available for freelance, undergraduate training or fulltime positions. Contact me and lets talk.</p>
              </div>

          <p className='uppercase pt-8 pl-4 text-[#5651e5] hover:cursor-pointer'>Connect With Me</p>
          <div className='flex items-center justify-between py-4'>
            <div className='text-[#5651e5] w-full flex items-center justify-between m-auto px-4 py-4'>
              <Link target="_blank" href='https://www.linkedin.com/in/stephen-muregwi-b6170830a/'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                <AiFillLinkedin/>
                </div>
                </Link>

                <Link target="_blank" href='https://github.com/itsstephenm'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                <AiFillGithub/>
                </div>
                </Link>

                <Link href='/#Contactsection'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                <AiOutlineMail/>
                </div>
                </Link>

                <Link href='/#about'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                <BsFillPersonLinesFill/>
                </div>
                </Link>
            </div>
          </div>
        </div>
        </div> 


          {/* Right-side */}
          <Formspree/>
          {/* <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
              <div className='p-4'>
                <form>
                  <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>Name</label>
                      <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
                    </div>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>Phone number</label>
                      <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
                    </div>
                  </div>
                  <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' />
                  </div>
                  <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
                  </div>
                  <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea className='border-2 rounded-lg p-3 border-gray-300' rows={10} ></textarea>
                  </div>
                  <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                </form>
              </div>
          </div> */}

    </div>
    <div className='flex justify-center py-12'>
      <Link href='/#home'>
        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-500'>
          <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
        </div>
      </Link>
    </div>
    </div>
    </div>
  )
}

export default Contactsection
