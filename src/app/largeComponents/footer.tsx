'use client'
import React,{useState} from 'react'
import { CiCircleChevDown } from "react-icons/ci";
import Link from 'next/link'
function footer() {
  const [buttons,setbuttons] =useState([{name:<p >Project</p>,link:'Projects',cls:'h-fit rounded p-[0.3rem]  m-[1rem]   flex p-[0.6rem] items-center space-x-[1rem] w-fit  hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110   '},{name:<p>Skills</p>,link:'Skills',cls:'h-fit rounded p-[0.5rem]  m-[1rem]  w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit   hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110  '},
  {name:<p>Experience</p>,link:'Experience',cls:'h-fit rounded p-[0.5rem]  m-[1rem]  w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit   hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110  '
  },
  {name:<p>Resume</p>,link:'Resume',cls:'h-fit rounded p-[0.5rem]  m-[1rem]  w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit   hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110  '},
  {name:<p>Contacts</p>,link:'Contacts',cls:'h-fit rounded p-[0.5rem]  m-[1rem]  w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit   hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110  '}])
    
  return (
    <>
    <div className='fixed bottom-[1.5rem]  text-white text-[1rem]  flex justify-center w-[98vw]   max-lg:hidden '>
    {buttons.map(x=>(
     <Link href={x.link}>
       <button className={x.cls } >
         {x.name} 
         <CiCircleChevDown />
       </button> 
     </Link>
      ))}
   </div>
    </>
  )
}

export default footer

