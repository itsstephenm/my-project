import { AppProps } from 'next/app';
import React, { Component } from 'react'
import  {useState, useEffect} from 'react';
import {IoMdMoon} from 'react-icons/io'

  function Mode() {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      const htmlElement = document.querySelector('html');
      htmlElement?.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);
    
   
  return (
    <div>
      <IoMdMoon className=' text-stone-700 hover:text-[#6e6d64] hover:scale-110 ease-in duration-500' size={25} onClick={()=> setDarkMode(!darkMode)}/>
    </div>
  )
}

export default Mode
