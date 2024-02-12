'use client'
import React ,{useState}from 'react'
import Link from "next/link"
import SocialLinks from '../smallComponents/socialLinks'
import { CiMobile3 } from "react-icons/ci"
import { IoMailOpenOutline } from "react-icons/io5"
import { CiLocationOn } from "react-icons/ci"
import { MdOutlineCloudDownload } from "react-icons/md"
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { Suspense } from 'react'
import Image from 'next/image'
function Loading(params:any) {
  return <>
  
    <div className='bg-[#969494]   flex rounded place-content-between space-y-3  p-[1rem]'>
      <div className='flex space-x-3 items-center'>
       <div className='h-[1.5rem] w-[1.5rem] bg-[#d1c9c9] p-[1.5rem] rounded-full'></div>
       <div className='h-[1.5rem] w-[9rem] bg-[#d1c9c9] p-[0.5rem] rounded'></div>
      </div>
      <div className='flex space-x-2'>
       <div className='h-[1rem] w-[1rem] bg-[#d1c9c9] p-[1rem] rounded-full'></div>
       <div className='h-[1rem] w-[1rem] bg-[#d1c9c9] p-[1rem] rounded-full'></div>
       <div className='h-[1rem] w-[1rem] bg-[#d1c9c9] p-[1rem] rounded-full'></div>
       <div className='h-[1rem] w-[1rem] bg-[#d1c9c9] p-[1rem] rounded-full'></div>
      </div>
    </div>
  </>
}
function Header() {
    const [socialIcons,setSocialicons]=useState([{icon:<FaInstagram />,link:'https://www.instagram.com/saviour_11235?igsh=MXNudXFwbXY2NG92bw==' },{icon:<LuLinkedin />,link:'https://www.linkedin.com/in/suresh-kumar-thakur-8b74bb263/'},{icon:<FiGithub />,link:'https://github.com/Saviour-236'},{icon:<FaXTwitter />,link:'https://twitter.com/X7Saviour' }])
    const [icons,seticons] = useState ([
    {icon:<CiMobile3 />,detail:'+91 6230930041'},
    {icon:<IoMailOpenOutline />,detail:'thakursureshkumar118@gmail.com',            } ,
    {icon:<CiLocationOn />,detail:'vill Kareu, Po Ohra, Teh Bhalai,Distt Chamba,HP'},
    {icon:<MdOutlineCloudDownload />,detail:'sf' }])
    const a = '/img.JPG'
  return (
    <>
      <Suspense fallback={<Loading/>}>
       <div className=" item-center   flex place-content-between border-b border-slate-700 h-fit-content items-center w-[100%] text-[1.3rem] font-serif">
            <div className=' flex items-center m-[1rem] mt-[1rem]  max-lg:m-[0rem]  text-white   space-x-[3rem] max-lg:space-x-[1rem] font-bold '>
              <button className='rounded-full h-[4rem] w-[4rem] border items-center overflow-hidden'>
                <Image
                  src={a}
                  alt="project pictur"
                  width={50}
                  height={50}
                  />
              </button>
              <p className='max-lg:hidden'>
              Welcome To My PortFolio
              </p>
              <p className='lg:hidden'>PortFolio</p>
            </div>
            <div className='hidden '>
            <SocialLinks icons={icons} />
            </div>
            <div className='text-white flex space-x-[1rem]'>
              {socialIcons.map((x,index)=>(
                <Link href={x.link} key={index}>{x.icon}</Link>
              ))}
            </div>
       </div></Suspense>
    </>
  )
}

export default Header
