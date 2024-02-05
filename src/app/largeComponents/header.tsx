'use client'
import React ,{useState}from 'react'
import SocialLinks from '../smallComponents/socialLinks'
import { CiMobile3 } from "react-icons/ci"
import { IoMailOpenOutline } from "react-icons/io5"
import { CiLocationOn } from "react-icons/ci"
import { MdOutlineCloudDownload } from "react-icons/md"
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import Link from "next/link"
function Header() {
    const [socialIcons,setSocialicons]=useState([{icon:<FaInstagram />,link:'https://www.instagram.com/saviour_11235?igsh=MXNudXFwbXY2NG92bw==' },{icon:<LuLinkedin />,link:'https://www.linkedin.com/in/suresh-kumar-thakur-8b74bb263/'},{icon:<FiGithub />,link:'https://github.com/Saviour-236'},{icon:<FaXTwitter />,link:'https://twitter.com/X7Saviour' }])
    const [icons,seticons] = useState ([
    {icon:<CiMobile3 />,detail:'+91 6230930041'},
    {icon:<IoMailOpenOutline />,detail:'thakursureshkumar118@gmail.com',            } ,
    {icon:<CiLocationOn />,detail:'vill Kareu, Po Ohra, Teh Bhalai,Distt Chamba,HP'},
    {icon:<MdOutlineCloudDownload />,detail:'sf' }])
  return (
    <>
       <div className=" item-center   flex place-content-between border-b border-slate-700 h-fit-content items-center w-[100%] text-[1.3rem] font-serif">
            <div className=' flex items-center m-[1rem] mt-[1rem]   text-white   space-x-[3rem] font-bold '>
            <button>
            <img src='https://img.freepik.com/premium-photo/minimalist-feather-design_802059-3.jpg?size=626&ext=jpg&uid=R122479474&ga=GA1.1.1034689284.1705596486&semt=ais ' className='rounded-full h-[3rem] w-[3rem]'/>
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
              {socialIcons.map(x =>(
                <Link href={x.link}>{x.icon}</Link>
              ))}
            </div>
       </div>
    </>
  )
}

export default Header
