'use client'
import React, { Suspense, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
function Loading (){
  return(
    <section className='p-[1rem]'>
          <div className='text-white  border-b-[1px] pb-[1rem] border-gray-50 space-y-[0.5rem]'>
          <div className='mb-[0.5rem] p-[2.5rem] bg-slate-300 w-[3rem] rounded items-center '></div>
           <p className='bg-slate-300 w-[8rem] p-[1rem] rounded'></p> 
         </div>
      </section>
  )
}
    function Youtube() {
      const [icon,setIcon]=useState(Boolean)
      return (
        <><Suspense fallback={<Loading/>}>
        <section className='p-[1rem]'>
        
          <div className='text-white  border-b-[1px] pb-[1rem] border-gray-50 space-y-[0.5rem]'>
          <div className='mb-[0.5rem] items-center '><Image
            src="/youtube.png"
            alt="youtube picture"
            width={100}
            height={100}
           /></div>
          <Link href='Projects/YouTube'><button onMouseEnter={()=>setIcon(true)} onMouseLeave={()=>setIcon(false)} className='p-[0.5]rounded bg-black shadow shadow-blue-500/40 align-middle items-center rounded-md text-white p-[0.5rem] flex space-x-[1rem]'><p>YouTube</p> {icon?<FaRegArrowAltCircleRight />:<FaArrowCircleRight />}</button></Link>
         </div>
      </section></Suspense>
        </>
      )
    }

export default Youtube