'use client'
import React, { Suspense, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FaChevronDown } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
function Abc () {
const [divCssBefore,setDivCssbefore] = useState('bg-white bg-opacity-[0.5] h-[0rem] overflow-auto rounded text-black p-[0.5rem] mb-[10rem]')
 const [divCssAfter,setDivCssAfter] = useState('bg-white bg-opacity-[0.5] h-fit overflow-auto rounded text-black p-[0.5rem]')
  const [active,setActive]= useState(false)
     const handleClick=()=>{
      setActive(()=>!active)
      }
  return(<>
         <div className = { active ? divCssAfter  : divCssBefore}>
         <p><b>Overview:</b></p>
  The project is a personal portfolio website built using Next.js, a React-based web development framework, along with Tailwind CSS for styling and TypeScript for type checking. The portfolio showcases the developer's skills, projects, and experience. The website is deployed on GitHub and hosted on Netlify for easy access.
 <ol> <b>-----Features----</b> 
  <li>Homepage :  The homepage introduces the developer and provides an overview of their skills and expertise.</li>
  <li> Projects Section : A section displaying the developer's projects, including descriptions, technologies used, and links to GitHub repositories or live demos.</li>
  <li>Skills Section: A section highlighting the developer's technical skills and proficiencies.
  Experience Section: Details about the developer's work experience, including past projects, roles, and responsibilities.</li>
  <li>Contact Sectoin : A contact section where from user can get contacts of developer.</li>
  <li>Responsive Design: The website is responsive and optimized for various devices and screen sizes.</li>
 </ol>
<ol>Technologies Used:
  <li>Next.js : Next.js is used as the primary framework for building the portfolio. It provides features such as server-side rendering, routing, and API routes, making it ideal for building dynamic web applications.</li>
  <li></li>
  <li>Tailwind CSS:Tailwind CSS is used for styling the components. It offers utility classes for rapid development and allows for easy customization.</li>
  <li>TypeScript:TypeScript is used for adding static typing to the project, enhancing code quality, and providing better developer experience.</li>
  <li>GitHub:- The project is version-controlled using Git and hosted on GitHub. GitHub provides features for collaboration, code review, and version control.</li>
  <li>Netlify :- The portfolio website is deployed on Netlify, a cloud platform for hosting static websites. Netlify offers continuous deployment, custom domains, and other features for hosting modern web applications.</li>
</ol>
 Deployment Process:
  Codebase is maintained on GitHub repositories.
  Continuous deployment is set up using Netlify, allowing automatic deployment of changes pushed to the main branch.
  <br />
  </div>
  <div className='text-right'><button onClick={handleClick}> {active ? <IoIosArrowUp /> : <FaChevronDown />} </button></div>
  </>)
}
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
function portfolio() {
  const [icon,setIcon]=useState(Boolean)
  return (
    <><Suspense fallback={<Loading/>}>
    <section className='p-[1rem]'>
      <div className='text-white  border-b-[1px] pb-[1rem] border-gray-50 space-y-[0.5rem]'>
      <div className='mb-[0.5rem] items-center '><Image
        src="/portfolio.png"
        alt="project picture"
        width={100}
        height={100}
       /></div>
      <Link href='https://portfolio-839e3.web.app/'><button onMouseEnter={()=>setIcon(true)} onMouseLeave={()=>setIcon(false)} className='p-[0.5]rounded bg-black shadow shadow-blue-500/40 align-middle items-center rounded-md text-white p-[0.5rem] flex space-x-[1rem]'><p>Portfolio</p> {icon?<FaRegArrowAltCircleRight />:<FaArrowCircleRight />}</button></Link>
     </div>
  </section></Suspense>
    </>
  )
}
export default portfolio