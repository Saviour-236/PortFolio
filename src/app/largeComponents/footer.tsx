'use client'
import React, { useState } from 'react';
import { CiCircleChevDown } from 'react-icons/ci';
import Link from 'next/link';

function Footer() {
  const [buttons, setButtons] = useState([
    { name: 'Project', link: '/Projects', cls: 'bg-black h-fit rounded p-[0.3rem] m-[1rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110' },
    { name: 'Skills', link: '/Skills', cls: 'h-fit bg-black rounded p-[0.5rem] m-[1rem] w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110' },
    { name: 'Experience', link: '/Experience', cls: 'h-fit rounded p-[0.5rem] bg-black m-[1rem] w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110' },
    { name: 'Resume', link: '/Resume', cls: 'h-fit rounded p-[0.5rem] m-[1rem] bg-black w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110' },
    { name: 'Contacts', link: '/Contacts', cls: 'h-fit rounded p-[0.5rem] m-[1rem] bg-black w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110' }
  ])

  return (
    <div className='sticky bottom-0 animate-pulse text-white text-[1rem] flex justify-center w-full max-md:overflow-auto z-[1] max-md:pl-[20rem] max-md:pt-[-3rem]'>
      {buttons.map((x, index) => (
        <Link href={x.link} key={index}>
          <button className={x.cls}>
            {x.name}
            <CiCircleChevDown className='  ml-[1rem]' />
          </button>
        </Link>
      ))}
    </div>
  );
}
export default Footer
/*import React,{useState} from 'react'
import { CiCircleChevDown } from "react-icons/ci";
import Link from 'next/link'
export default function footer() {
  const [buttons,setbuttons] =useState([
    {name:'Project',link:'/Projects',cls:'  bg-black h-fit rounded p-[0.3rem]  m-[1rem]   flex p-[0.6rem] items-center space-x-[1rem] w-fit  hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110   '},
   {name:'Skills',link:'/Skills',cls:'h-fit bg-black rounded p-[0.5rem]  m-[1rem]  w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit   hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110  '},
   {name:'Experience',link:'/Experience',cls:'h-fit rounded p-[0.5rem]  bg-black  m-[1rem]  w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit   hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110  '
   },
   {name:'Resume',link:'/Resume',cls:'h-fit rounded p-[0.5rem]  m-[1rem] bg-black  w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit   hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110  '},
   {name:'Contacts',link:'/Contacts',cls:'h-fit rounded p-[0.5rem]  m-[1rem]  bg-black  w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit   hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110  '}]);
    
  return (
    
    <div className='sticky bottom-0 animate-pulse text-white   text-[1rem]  flex justify-center w-full max-md:overflow-auto z-[1]  max-md:pl-[20rem] max-md:pt-[-3rem '>
     {buttons.map((x,index)=>
       (
        
          <Link href={x.link} key={index}>
           <button className={x.cls } >
            {x.name}  
            <CiCircleChevDown className='ml-[1rem]'/>
           </button> 
           </Link>
         
        )
     )
     }
   </div>
    
   
  }
  
  
  )*/
