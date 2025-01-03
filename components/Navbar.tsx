'use client';
import Image from 'next/image'
import React, { useState, useEffect as myCustomEffect, Component } from 'react';
import Atom from '../public/assets/Atom.jpeg';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail, AiFillGithub} from 'react-icons/ai';
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";


const Navbar = () => {
  
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [darkMode, setDarkMode] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  };

  myCustomEffect(() => {
  const handleShadow = () => {
    if (window.scrollY >= 90) {
      setShadow(true);
    }else{
      setShadow(false);
    }
  };
window.addEventListener('scroll', handleShadow)
}, []);

  return (
    <div className={shadow ? 'bg-slate-50 fixed w-full h-20 shadow-xl z-[100]' :'bg-[#ecf0f3] fixed w-full h-20 z-[100]'}>
      
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href="/#home">
        <Image className='rounded-full' src={Atom.src} alt="/" width={50} height={50} />
        </Link>

        <ul className=' hidden md:flex'>
            <Link href='/#home'>
              <li className='ml-10 text-sm uppercase  hover:border-b '>Home</li>
            </Link>   
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase  hover:border-b'>About</li>
            </Link>   
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase  hover:border-b'>Skills</li>
            </Link>   
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase  hover:border-b'>Projects</li>
            </Link>
            {/* <Link href='/Resume'>
            <li className='ml-10 text-sm uppercase  hover:border-b'>Resume</li>
            </Link>    */}
            <Link href='/#Contactsection'>
              <li className='ml-10 text-sm uppercase  hover:border-b'>Contact</li>
            </Link>   
        </ul>
        <div onClick={handleNav} className='md:hidden'>
          <AiOutlineMenu size={25}/>
        </div>
      </div>
      {/* Parent Container/Div of Side NavBar Below */}
      <div className={nav? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>  
            <div className={nav? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                                :'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>

                <div className='flex w-full items-centre justify-between'>
                  <Link href="/#home">
                  <Image  onClick={()=> setNav(false)} className='rounded-full' src={Atom.src} alt="/" height={35} width={40}/>
                  </Link>
                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                      <AiOutlineClose/>
                    </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                <p className='text-sm w-[85%] md:w-[90%] py-4'>Lets work together towards a better future!
                </p>
                </div>
                <div className='border-b border-gray-300 pb-16'>
                  <ul className='flex flex-col uppercase'>
                    <Link href='/#home'>
                      <li onClick={()=> setNav(false)} className='text-sm py-4'>Home</li>
                    </Link>
                    <Link href='/#about'>
                      <li onClick={()=> setNav(false)} className='text-sm py-4'>About</li>
                    </Link>
                    <Link href='/#skills'>
                      <li onClick={()=> setNav(false)} className='text-sm py-4'>Skills</li>
                    </Link>
                    <Link href='/#projects'>
                      <li onClick={()=> setNav(false)} className='text-sm py-4'>Projects</li>
                    </Link>
                    {/* <Link href='/Resume'>
                      <li onClick={()=> setNav(false)} className='text-sm py-4'>Resume</li>
                    </Link> */}
                    <Link href='/#Contactsection'>
                      <li onClick={()=> setNav(false)} className='text-sm py-4'>Contact</li>
                    </Link>
                  </ul>
                </div>
                <div className='pt-10 tracking-wide uppercase text-[#5651e5]'>
                      Let`s Connect
                </div>
                <div className='text-[#5651e5] flex items-center justify-between mt-6 w-full sm:w-[80%]'>
                  <Link target="_blank" href='https://www.linkedin.com/in/stephen-muregwi-b6170830a/'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 '>
                  <AiFillLinkedin />
                </div>
                  </Link>
                
                  <Link target="_blank" href='https://github.com/itsstephenm'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 '>
                  <AiFillGithub/>
                </div>
                  </Link>                

                  <Link onClick={()=> setNav(false)} href='/#Contactsection'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 '>
                  <AiOutlineMail/>
                </div>
                  </Link>
                
                  <Link onClick={()=> setNav(false)} href='/#about'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 '>
                  <BsFillPersonLinesFill/>
                </div>
                  </Link>
                
                </div>
            </div>
      </div>
    </div>
  )
}

export default Navbar
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}
