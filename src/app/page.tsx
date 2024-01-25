'use client'

import React ,{useState}from 'react'
import Image from 'next/image'
import Header from './largeComponents/header'
import Footer from './largeComponents/footer'
import Link from 'next/link'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
export default function Home() {
  const [buttons,setbuttons] =useState([{name:<p >Project</p>,link:'',cls:'h-fit rounded p-[0.3rem]  m-[1rem]  w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit  hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110  '},{name:<p>Skills</p>,link:'',cls:'h-fit rounded p-[0.3rem]  m-[1rem]  w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit   hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110  '},
  {name:<p>Resume</p>,link:'',cls:'h-fit rounded p-[0.3rem]  m-[1rem]  w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit   hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110  '},
  {name:<p>Contacts</p>,link:'',cls:'h-fit rounded p-[0.3rem]  m-[1rem]  w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit   hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110  '},
  {name:<p>Experience</p>,link:'',cls:'h-fit rounded p-[0.3rem]  m-[1rem]  w-[5rem] flex p-[0.6rem] items-center space-x-[1rem] w-fit   hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110  '}])
return (
  <>
    <section className="antialiased bg-neutral-800/50 cover relative px-[1rem] shadow- [0_35px_60px_-15px_rgba(0,0,0,0.3)] font-serif rounded m-[20px] h-[90vh] bg-cover relative">
           <Header  />
          <div className='flex h-[80% ]  p-[2rem] mt-[] mt-[1rem] '>
            <div className='  m-auto  flex'>
              <div className=' place-content-center p-[6rem]  space-y-[1rem] relative'>
                <div className=' ml-[-2rem]'>
                  <div className='    text-white '>
                    <p className='text-[2rem] '>🙋‍♂️Hey Hi...👋</p>
                    <p className='text-[2.5rem] text-[#ffd54a] '> M Suresh Kumar </ p>
                    <p className="text-[1.5rem]  text-cyan-300  font-bold">Your Next Web Development Asset</p>
                    <p className='text-[1rem] italic'>Let's connect and explore how my skills can contribute to your team's success.</p>
                  </div>
                  <div className='text-white flex mt-[1rem] '>
                    {buttons.map(x=>(
                    <button className={x.cls} >{x.name} 
                    <FaRegArrowAltCircleRight  />
                    </button> 
                      ))}
                  </div>
                </div>
              </div>
              <div>
              <div className=' justify-content-center relative items center  p-[1rem] '  >
                <img src='https://photosfile.com/wp-content/uploads/2023/10/Attitude-DP-Boys-79.jpg ' className='h-[18rem] mt-[2.5rem]  ml-[1rem] opacity-[0.6] rounded static '/>
                </div>
              </div>
            </div>
          </div>
          <div className=' text-[2rem] w-fit h-fit flex absolute bottom-[4rem] right-[40%]  h-[2rem] text-[#262625] space-x-[1rem]'>
            <FaFacebookSquare/>
            <RiInstagramFill/>
            <FaSquareXTwitter/>
            <FaSquareGithub/>
          </div>
   </section>
  </>
    
)
}
