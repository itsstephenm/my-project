import Image from 'next/image'
import React from 'react'
import html from '../public/assets/skills/html.png';
import css from '../public/assets/skills/css.png';
import nextjs from '../public/assets/skills/nextjs.png';
import tailwind from '../public/assets/skills/tailwind.png';
import github1 from '../public/assets/skills/github1.png';
import react from '../public/assets/skills/react.png';
import javascript from '../public/assets/skills/javascript.png';
import firebase from '../public/assets/skills/firebase.png';



const Skills = () => {
  return (
    <div id='skills' className='py-16 border-b border-gray-300 w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
          <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
          <h2 className='py-4'>What I Can Do</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>


              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src={tailwind.src} alt="/" height={64} width={64}/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <h3>Tailwind</h3>
                  </div>
                  </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src={nextjs.src} alt="/" height={64} width={64}/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <h3>Nextjs</h3>
                  </div>
                  </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src={css.src} alt="/" height={64} width={64}/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <h3>Css</h3>
                  </div>
                  </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src={html.src} alt="/" height={64} width={64}/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <h3>Html</h3>
                  </div>
                  </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src={github1.src} alt="/" height={64} width={64}/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <h3>Github</h3>
                  </div>
                  </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src={react.src} alt="/" height={64} width={64}/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <h3>React</h3>
                  </div>
                  </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src={javascript.src} alt="/" height={64} width={64}/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <h3>Javascript</h3>
                  </div>
                  </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src={firebase.src} alt="/" height={64} width={64}/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <h3>Firebase</h3>
                  </div>
                  </div>
              </div>



          </div>
      </div>
    </div>
  )
}

export default Skills
