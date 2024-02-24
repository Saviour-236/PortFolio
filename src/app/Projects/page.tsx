'use client'
import Image from 'next/image'
import React,{useState} from 'react'
import Portfolio from './project Links/portfolio'
import Youtube from './project Links/Youtube'
import LogInPage from './project Links/loginPage'
import Link from 'next/link'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
function Items(src:string,alt:string,projectName:string,href:string){
  const [icon,setIcon]=useState(Boolean)
  return(
    <>
    <section className='p-[1rem]'>
        
        <div className='text-white  border-b-[1px] pb-[1rem] border-gray-50 space-y-[0.5rem]'>
        <div className='mb-[0.5rem] items-center '><Image
          src={src}
          alt={alt}
          width={100}
          height={100}
         /></div>
        <Link href={href}><button onMouseEnter={()=>setIcon(true)} onMouseLeave={()=>setIcon(false)} className='p-[0.5]rounded bg-black shadow shadow-blue-500/40 align-middle items-center rounded-md text-white p-[0.5rem] flex space-x-[1rem]'><p>{projectName}</p> {icon?<FaRegArrowAltCircleRight />:<FaArrowCircleRight />}</button></Link>
       </div>
    </section>
    </>
  )
}
function Projects() {
    
  return (
    <>
    <section>
    <div className='items-center flex text-center justify-content-center text-[1rem]'>
       <div className='m-auto'><Image
        src='/project.png'
        alt='project.png'
        height={100}
        width={100}/>
        </div> 
      </div>
      <div className='grid grid-cols-3 max-lg:grid-cols-1 grid-coulmn-gap-[1rem]'>
      {Items ('/portfolio.png','PortFolio picture' ,'PortFolio' ,'https://portfolio-839e3.firebaseapp.com/')}
      {Items ('/logInPage.webp','logInPage Icon' ,'signup'  ,'Projects/signup')}
      {Items ('/youtube.png','youtube picture' ,'YouTube'  ,'Projects/YouTube')}
      </div>
   
    </section>
    </>
  )
}

export default Projects