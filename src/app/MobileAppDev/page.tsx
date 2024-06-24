import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Dashboard_Dark_Mockup_for_Unity from '../../../public/assets/MobileAppContent/Dashboard Dark Mockup for Unity.jpeg'
import CalculatorApp from '../../../public/assets/MobileAppContent/CalculatorApp.png'
import CalculatorApp2 from '../../../public/assets/MobileAppContent/CalculatorApp2.png'
import Signup from '../../../public/assets/MobileAppContent/Signup.png'
import NewRegistration from '../../../public/assets/MobileAppContent/NewRegistration.png'
import dashboard from '../../../public/assets/MobileAppContent/dashboard.png'
import AppContent from '../../../public/assets/MobileAppContent/AppContent.png'
import { RiRadioButtonFill } from 'react-icons/ri'

const page = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'>
            <Image className='absolute z-1 opacity-30' layout='fill' objectFit='cover' src={Dashboard_Dark_Mockup_for_Unity} alt="/" />
            <div className=' ml-4 Absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[0%] translate-y-[200%] text-white z-10 p-2'>
                <h2>Mobile Application Dev</h2>
                <h3>TailwindCss | NextJs | Firebase</h3>
            </div>
        </div>
      </div>

      <div className=' max-w-[1240px ] mx-auto p-2 md:grid-cols-5 gap-8 pt-16'>
        <div className=' md:flex '>

        <div>
        <div className='col-span-4'>
         <p className='uppercase text-[#5651e5] tracking-widest'>Project-Study Planner App</p>
          <h2 className='py-2'>Overview</h2>
          <p className='py-4'>
            Here i worked on a Study Planner Application at the National University of Science and Technology, which had a number of pages inlcuding the signup page, new registration, dashboard and a section which displayed content to be studied inform of pdf`s.
          <p>
            A signed-up user can login to access a dashboard of courses (current block/session courses) as links to each course page.
            On visiting each course link, the user is taken to the course page with reading material on the course. The user is able to navigate back to the dashboard from each course page.

          </p>
             Get in touch-<Link className='text-[#5651e9] border-b-2' href='/#Contactsection'>Contact Section</Link>  
          </p>
          
        </div>
        </div>

         <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl m-4 px-4 '>
            <div className='p-2'>
                <p className='tracking-widest'>Technologies</p>
                <div className='bg-gray-100 shadow-xl shadow-gray-100 rounded-lg pt-8 hover:cursor-pointer'>
                  <p className='text-gray-600 items-center flex py-2'>
                    <RiRadioButtonFill className='pr-1'/>Flutter
                  </p>
                  <p className='text-gray-600 items-center flex py-2'>
                    <RiRadioButtonFill className='pr-1'/>Dart
                  </p>
                  <p className='text-gray-600 items-center flex py-2'>
                    <RiRadioButtonFill className='pr-1'/>Android_Studio
                  </p>
                </div>
            </div>
        </div>

        </div>




        <div className=' mt-12 p-4 container shadow-lg shadow-gray-700 rounded-lg grid md:grid-cols-4 sm:grid-cols-1 gap-x-2 pt-8'>
            <Image className='hover:scale-105 ease in duration-500 mt-1 rounded-xl shadow-lg shadow-gray-700' src={Signup} alt="" width={2000} height={2000} />
            <Image className='hover:scale-105 ease in duration-500 mt-1 rounded-xl shadow-lg shadow-gray-700' src={NewRegistration} alt=""width={2000} height={2000} />
            <Image className='hover:scale-105 ease in duration-500 mt-1 rounded-xl shadow-lg shadow-gray-700' src={dashboard} alt="" width={2000} height={2000}/>
            <Image className='hover:scale-105 ease in duration-500 mt-1 rounded-xl shadow-lg shadow-gray-700' src={AppContent} alt="" width={2000} height={2000}/>
          <p className='mt-4 font-bold'>#Code Sinppet and emulator visuals</p>        
        </div>

      </div>

      <div className='max-w-[1240px ] mx-auto p-2 md:grid-cols-5 gap-8 pt-16'>
        <div className='col-span-4'>
          <p className='uppercase text-[#5651e5] tracking-widest'>Project-Calculator App</p>
          <h2 className='py-2'>Overview</h2>
          <p className='py-4'>
            Below is a Basic Calculator App built on Android Studio, utilizing flutter and dart programming language. Im still learning and developing this area but im growing on a day to day basis. Get in touch-<Link className='text-[#5651e9] border-b-2' href='/#Contactsection'>Contact Section</Link>  
          </p>
        </div>

        <div className=' p-4 container shadow-lg shadow-gray-700 rounded-lg grid md:grid-cols-2 sm:grid-cols-1 gap-x-4 pt-8'>
          <Image className='mt-1 container shadow-lg shadow-gray-700 rounded-lg' src={CalculatorApp} alt="/" width={2000} height={2000}/>
          <Image className='mt-1 container shadow-lg shadow-gray-700 rounded-lg hover:scale-105 ease-in duration-300' src={CalculatorApp2} alt="/" width={1500} height={1500}/>
          <p className='mt-4 font-bold'>#Calculator Code Snippet</p>        
        </div>

      </div>

      <div className='py-8 pl-16'>
        <Link className='transition underline text-[#5651e5] ' href='/#home'>Back</Link>
      </div>
    </div>
  )
}

export default page
