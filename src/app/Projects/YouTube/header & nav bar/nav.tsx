'use client'
import React, { useState } from 'react'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { GrHomeRounded } from "react-icons/gr";
import { SlEnergy } from "react-icons/sl";
import { MdSubscriptions } from "react-icons/md";
import { IconType } from 'react-icons';
function button (prop1:React.JSX.Element,prop2:React.JSX.Element) {
    const [click,setClick] =useState(false)
    return(<>
   <button className='block text-[1.5rem] ' onClick={()=>setClick(!click)}>
       {click ? prop2 : prop1}
    </button> 
    </>
      
    )
}
function nav() {
  return (
    <>
    <nav className='h-full border w-fit sticky left-0'>
      { button( <GrHomeRounded /> , <MdHomeFilled />)}
      { button(  <SlEnergy />, <SiYoutubeshorts />)}
      { button(  <MdOutlineSubscriptions />, <MdSubscriptions />)}
      <button className='block text-white bg-black rounded-full'><SiYoutubemusic /></button>
    </nav>
    </>
  )
}

export default nav