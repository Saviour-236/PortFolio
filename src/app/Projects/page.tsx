'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Projects() {
  
  return (
    <>
     <section className='p-[3rem]'>
       <div className='text-white  border-b-[1px] pb-[1rem] border-gray-50 space-y-[0.5rem]'>
         <div><Image
           src="/React.png"
           alt="project picture"
           width={100}
           height={100}
          /></div>
         <div>Project Name</div>
         <div>Here will be the discription of project</div>
        </div>
     </section>
     
    </>
  )
}

export default Projects