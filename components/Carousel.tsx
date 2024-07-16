import Image from 'next/image'
import React from 'react'
import page1 from '../public/assets/UIandGRAPHICS/Page1.png'
import page2 from '../public/assets/UIandGRAPHICS/Page2.png'
import page3 from '../public/assets/UIandGRAPHICS/Page3.png'
import page4 from '../public/assets/UIandGRAPHICS/Page4.png'
import page5 from '../public/assets/UIandGRAPHICS/Page5.png'
import page6 from '../public/assets/UIandGRAPHICS/Page6.png'

const Carousel = () => {
  return (
    <div>
      <div className="carousel rounded-box">
  <div className="carousel-item">
    <Image className='rounded-lg hover:scale-110 ease-in duration-300' src={page1.src} alt='' width={400} height={100}></Image>
  </div>
  <div className="carousel-item">
  <Image className='rounded-lg hover:scale-110 ease-in duration-300' src={page2.src} alt='' width={400} height={100}></Image>
  </div>
  <div className="carousel-item">
  <Image className='rounded-lg hover:scale-110 ease-in duration-300' src={page2.src} alt='' width={400} height={100}></Image>
  </div>
  <div className="carousel-item">
  <Image className='rounded-lg hover:scale-110 ease-in duration-300' src={page3.src} alt='' width={400} height={100}></Image>
  </div>
  <div className="carousel-item">
  <Image className='rounded-lg hover:scale-110 ease-in duration-300' src={page4.src} alt='' width={400} height={100}></Image>
  </div>
  <div className="carousel-item">
  <Image className='rounded-lg hover:scale-110 ease-in duration-300' src={page5.src} alt='' width={400} height={100}></Image>
  </div>
  <div className="carousel-item">
  <Image className='rounded-lg hover:scale-110 ease-in duration-300' src={page6.src} alt='' width={400} height={100}></Image>
  </div>
</div>
    </div>
    
  )
}

export default Carousel
