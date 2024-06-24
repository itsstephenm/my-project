import Image from 'next/image'
import React from 'react'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';
import Weather_Forecast_Mobile_App from '../../../public/assets/UIandGRAPHICS/Weather Forecast Mobile App.jpeg'
import Link from 'next/link'
import Page1 from '../../../public/assets/UIandGRAPHICS/Page1.png'
import Page2 from '../../../public/assets/UIandGRAPHICS/Page2.png'
import Page3 from '../../../public/assets/UIandGRAPHICS/Page3.png'
import Page4 from '../../../public/assets/UIandGRAPHICS/Page4.png'
import Page5 from '../../../public/assets/UIandGRAPHICS/Page5.png'
import Page6 from '../../../public/assets/UIandGRAPHICS/Page6.png'
import Saloon_Template from '../../../public/assets/UIandGRAPHICS/Saloon Template.png'
import Design1 from '../../../public/assets/UIandGRAPHICS/Design1.png'
import Graphic_Designer_Poster from '../../../public/assets/UIandGRAPHICS/Graphic Designer Poster.png'
import { RiRadioButtonFill } from 'react-icons/ri';

const page = () => {
  return (
    <div className='w-full'>
           <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'>
            <Image className='absolute z-1 opacity-30' layout='fill' objectFit='cover' src={Weather_Forecast_Mobile_App} alt="/" />
            <div className=' ml-4 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[0%] translate-y-[200%] text-white z-10 p-2'>
                {/* <h2>UX/UI And Graphics</h2>
                <h3>TailwindCss | NextJs | Firebase</h3> */}
            </div>
        </div>
      </div>

      <div className='max-w-[1240px ] mx-auto p-2 md:grid-cols-5 gap-8 pt-16'>
        <div className='md:flex'>

             <div className='col-span-4'>
                <p className='uppercase text-[#5651e5] tracking-widest'>Project-Steak and Fries(Mobile App)</p>
                  <h2 className='py-2'>Overview</h2>
                <p className='py-4'>
                 This was a Mobile Application User-interface that i developed on Adobe XD, show casing my ability and skills for a beautifull yet proffesional user interface designs. Get in touch-<Link className='text-[#5651e9] border-b-2' href='/#Contactsection'>Contact Section</Link>   
             </p>
            </div>

            <div className='mb-8 col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl m-4 px-4 '>
            <div className='p-2'>
                <p className='tracking-widest'>Technologies</p>
                <div className='bg-gray-100 shadow-xl shadow-gray-100 rounded-lg  pt-8 hover:cursor-pointer'>
                  <p className='text-gray-600 items-center flex py-2'>
                    <RiRadioButtonFill className='pr-1'/>Adobe XD
                  </p>
                  <p className='text-gray-600 items-center flex py-2'>
                    <RiRadioButtonFill className='pr-1'/>Photoshop
                  </p>
                  <p className='text-gray-600 items-center flex py-2'>
                    <RiRadioButtonFill className='pr-1'/>Android_Studio
                  </p>
                </div>
            </div>
        </div>
        </div>

        

        <div className='rounded-lg shadow shadow-gray-700 mx-8 p-4 grid md:grid-cols-6 sm:grid-cols-3 gap-2 pt-8'>
            <div className='container shadow-lg shadow-gray-700 rounded-lg'>
            <Image className='rounded-lg hover:scale-110 ease-in duration-300' src={Page1.src} alt="" width={400} height={100} />
            </div>
            <div className='container shadow-lg shadow-gray-700 rounded-lg'>
            <Image className='rounded-lg hover:scale-110 ease-in duration-300' src={Page2.src} alt="" width={400} height={100} />
            </div>
            <div className='container shadow-lg shadow-gray-700 rounded-lg'>
            <Image className='rounded-lg hover:scale-110 ease-in duration-300' src={Page3.src} alt="" width={400} height={100} />
            </div>
            <div className='container shadow-lg shadow-gray-700 rounded-lg'>
            <Image className='rounded-lg hover:scale-110 ease-in duration-300' src={Page4.src} alt="" width={400} height={100} />
            </div>
            <div className='container shadow-lg shadow-gray-700 rounded-lg'>
            <Image className='rounded-lg hover:scale-110 ease-in duration-300' src={Page5.src} alt="" width={400} height={100} />
            </div>
            <div className='container shadow-lg shadow-gray-700 rounded-lg'>
            <Image className='rounded-lg hover:scale-110 ease-in duration-300' src={Page6.src} alt="" width={400} height={100} />
            </div>
        </div>
        <div className='col-span-4'>
          <p className='uppercase text-[#5651e5] tracking-widest pt-16'>Project(s)-Nail Saloon Template(s) And Web Design(s)</p>
          <h2 className='py-2'>Overview</h2>
          <p className='py-4'>
              Here is a couple of areas i also specialize in including web designs and graphic designing, ive also included my poster
              for basic graphic designing services that i offer. Head into the <Link className='text-[#5651e9] border-b-2' href='/#Contactsection'>Contact Section</Link> to get intouch for services.
          </p>
        </div>
          <div className=' rounded-lg p-4 shadow shadow-gray-700 flex-row mx-8 grid grid-rows-2 md:grid-cols-2 sm:grid-cols-1 gap-4 pt-8'>
              <Image className='rounded-lg shadow-lg shadow-gray-700 row-span-2 hover:scale-105 ease-in duration-300' src={Design1} alt="/"width={600} height={400} />
              <Image className='rounded-lg shadow-lg shadow-gray-700 hover:scale-105 ease-in duration-300' src={Saloon_Template} alt="/"width={600} height={400} />
              <Image className='rounded-lg shadow-lg shadow-gray-700 hover:scale-105 ease-in duration-300' src={Graphic_Designer_Poster} alt="/"width={600} height={400} />
          </div>
      </div>
      <div className='flex justify-between w-full'>
        <Link className='transition underline text-[#5651e5] pl-16 py-8' href='/#home'>Back</Link>
        
        {/* <Link href='/#designs'>
        <div className='rounded-full shadow-lg shadow-gray-400 mr-16 my-8 p-2 cursor-pointer hover:scale-110 ease-in duration-500'>
          <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={15}/>
        </div>
      </Link> */}
      </div>
    </div>
  )
}

export default page
