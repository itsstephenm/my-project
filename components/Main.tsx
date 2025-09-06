import Link from 'next/link';
import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai';
import { AiOutlineMail, AiFillGithub} from 'react-icons/ai';
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
   
   <div id='home' className='border-b border-gray-300 w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto pt-24 flex justify-center items-center'>
            <div>
              <p className='uppercase text-sm tracking-wide'>Team Work Makes The Dream Work</p>
              <h1 className='py-4 text-gray-700 '>
                Hi, i'm <span className='text-[#5651e5]'>Stephen</span>
              </h1>
              <h1 className='py-2 text-gray-700'>
                  Network Systems Administrator 
              </h1>
              <p className='py-4 mx-auto text-gray-600 max-w-[70%] '> 
                primary responsibilities include managing and maintaining the organization's network infrastructure 
                to ensure optimal performance and security. I oversee the installation, configuration, and troubleshooting 
                of network hardware and software, including routers, switches, and firewalls. Additionally, I monitor network 
                performance, implement security protocols, and conduct regular backups to safeguard data integrity. I collaborate 
                with cross-functional teams to support IT projects and provide technical support to users, ensuring seamless connectivity 
                and efficient operations across the organization. My goal is to create a reliable and secure network environment 
                that meets the evolving needs of the business.
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
