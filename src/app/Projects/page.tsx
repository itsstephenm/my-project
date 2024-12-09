"use client";
import React from 'react'
import userinterface from '../../../public/assets/Projects/userinterface.jpg';
import MobileApp from '../../../public/assets/Projects/MobileApp.jpg';
import Projectsitem from '../../../components/Projectsitem';
import networking from '../../../public/assets/networking.jpg';

const Projects = () => {

  return (
    <div id='projects' className='py-16 border-b border-gray-300 w-full'>

      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects And Certifications</p>
        <h2>What I`ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

            <Projectsitem 
            title='UX/UI Interface and Web Designing' 
            backgroundImg={userinterface} 
            projectUrl='/userinterfacepage'
            />
            
            <Projectsitem 
            title='Mobile App Dev' 
            backgroundImg={MobileApp} 
            projectUrl='/MobileAppDev'
            />

           <Projectsitem 
            title='NETWORKING CERTIFICATIONS' 
            backgroundImg={networking} 
            projectUrl='/Networking'
            />
        </div>
      </div>
    </div>
  )
}


export default Projects

