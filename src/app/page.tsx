'use client'

import React ,{useState}from 'react'
import Image from 'next/image'
import Header from './largeComponents/header'
import Footer from './largeComponents/footer'
import Link from 'next/link'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { CiCircleChevDown } from "react-icons/ci";

import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
export default function Home() {
  const [buttonCss,setbuttonCss] = useState('h-fit rounded p-[0.8rem]   m-[1rem]  w-[5rem] flex p-[0.6rem] items-center space-x-[3rem] w-fit   hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110 ')
  const [buttons,setbuttons] =useState([{name:<p >Project</p>,link:'',cls:'h-fit rounded p-[0.3rem]  m-[1rem]  w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit  hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110   '},{name:<p>Skills</p>,link:'',cls:'h-fit rounded p-[0.5rem]  m-[1rem]  w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit   hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110  '},
  {name:<p>Resume</p>,link:'',cls:'h-fit rounded p-[0.5rem]  m-[1rem]  w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit   hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110  '},
  {name:<p>Experience</p>,link:'',cls:'h-fit rounded p-[0.5rem]  m-[1rem]  w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit   hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110  '
  },
  {name:<p>Contacts</p>,link:'',cls:'h-fit rounded p-[0.5rem]  m-[1rem]  w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit   hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110  '}])
return (
  <>
    < section className="antialiased bg-neutral-800/20  absolute px-[1rem] shadow- [0_35px_60px_-15px_rgba(0,0,0,0.3)] font-serif rounded m-[20px] h-[90vh]  w-[90vw]  overflow-auto  " >
           <Header  />
          <div className=' flex m-auto items-center justify-center  h-[90%] max-md:h-[80%] p-[2rem]  ' >
            <div className=' p-[1rem] space-y-[3rem]  max-lg:m-auto  '>
              <div className='   flex items-center  max-lg:block '>
                <div className='  m-auto flex items-center space-x-[5rem] max-lg:space-x-[2rem] '>
                  <div className='text-white '>
                    <p className='text-[3rem] max-lg:text-[1rem]  '>🙋‍♂️Hey Hi...👋</p>
                    <p className='text-[4rem] text-[#ffd54a] max-lg:text-[2rem] '> M Suresh Kumar </ p>
                    <p className="text-[2rem]  text-[#c7d6d4]  font-bold max-lg:text-[1.5rem] ">Your Next Web Development Asset</p>
                    <p className='text-[1.5rem] italic max-lg:text-[1.5rem]'>Let's connect and explore how my skills can contribute to your team's success.</p>
                  </div>
                  <div className=' relative flex max-md:inline-block  m-auto    items-center align-middle  max-md:hidden   '  >
                    <img src='https://photosfile.com/wp-content/uploads/2023/10/Attitude-DP-Boys-79.jpg ' className='opacity-[0.6] h-[20rem] max-lg:h[15rem] w-[20rem]  rounded '/>
                  </div>
                </div>
              </div>
              <div className='text-white text-[2rem] flex mt-[1rem] justify-center max-lg:hidden '>
               {buttons.map(x=>(
                <button className={x.cls} >{x.name} 
                <CiCircleChevDown />
                </button> 
                 ))}
              </div>
              <div className='lg:hidden text-white'>
                <div className=' flex  justify-center '>
                  <button className={buttonCss}>Project<CiCircleChevDown /></button>
                 <button className={buttonCss}>Project<CiCircleChevDown /></button>
                 <button className={buttonCss}>Project<CiCircleChevDown /></button>
                </div>
                 <div className=' flex justify-center  '>
                 <button className={buttonCss}>Project<CiCircleChevDown /></button>
                 <button className={buttonCss}>Project<CiCircleChevDown /></button>
                </div>
              </div>
            </div>
          </div>
          <div className=' text-[2rem] w-fit h-fit flex absolute bottom-[4rem]  right-[40%] max-md:bottom-[1.5rem] max-sm:right-[18%] max-lg:right-[33%]  h-[2rem] text-[#dce0e0] space-x-[3rem] max-md:right-[23%]'>
           <button><FaFacebookSquare/></button> 
           <button><RiInstagramFill/></button>
           <button><FaSquareXTwitter/></button>
           <button><FaSquareGithub/></button>
          </div>
   </section>
  </>
    
)
}
