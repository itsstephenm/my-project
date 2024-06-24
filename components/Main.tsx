import Link from 'next/link';
import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai';
import { AiOutlineMail, AiFillGithub} from 'react-icons/ai';
import { BsFillPersonLinesFill } from "react-icons/bs";


const Main = () => {
  return (
    <div id='home' className='border-b border-gray-300 w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
              <p className='uppercase text-sm tracking-wide'>Team Work Makes The Dream Work</p>
              <h1 className='py-4 text-gray-700 '>
                Hi, Im <span className='text-[#5651e5]'>Stephen</span>
              </h1>
              <h1 className='py-2 text-gray-700'>
                  A Front-End Web Developer
              </h1>
              <p className='py-4 mx-auto text-gray-600 max-w-[70%] '>
                Im a front-end web developer specializing in building sites and occasional graphics designing, 
                creating beautiful and proffesional digital experiences. 
                Currently im focused on building responsive front-end web applications, improving my 
                graphics designing skills whilst working on my mobile Application development skill and back-end technologies.  
              </p>
              <div className='text-[#5651e5] flex items-center justify-between max-w-[330px] m-auto py-4'>
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
  )
}

export default Main