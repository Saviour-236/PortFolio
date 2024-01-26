'use client'
import React ,{useState}from 'react'
import SocialLinks from '../smallComponents/socialLinks'
import { CiMobile3 } from "react-icons/ci"
import { IoMailOpenOutline } from "react-icons/io5"
import { CiLocationOn } from "react-icons/ci"
import { MdOutlineCloudDownload } from "react-icons/md"
import { MdOutlineContacts } from "react-icons/md"
import { IoMdCopy } from "react-icons/io";
import { BsCopy } from "react-icons/bs";
function Header() {
    const [icons,seticons] = useState ([
    {icon:<CiMobile3 />,detail:'+91 6230930041'},
    {icon:<IoMailOpenOutline />,detail:'thakursureshkumar118@gmail.com',            } ,
    {icon:<CiLocationOn />,detail:'vill Kareu, Po Ohra, Teh Bhalai,Distt Chamba,HP'},
    {icon:<MdOutlineCloudDownload />,detail:'sf' }])
  return (
    <>
       <div className=" item-center   flex place-content-between border-b border-slate-700 h-fit-content items-center w-[100%] text-[2rem] font-serif">
            <div className=' flex items-center m-[1rem] mt-[1rem]   text-white   space-x-[3rem] font-bold '>
            <button>
            <img src='https://img.freepik.com/premium-photo/minimalist-feather-design_802059-3.jpg?size=626&ext=jpg&uid=R122479474&ga=GA1.1.1034689284.1705596486&semt=ais ' className='rounded-full h-[3rem] w-[3rem]'/>
            </button>
            <p className='max-lg:hidden'>
              Welcome To My PortFolio
            </p>
            <p className='lg:hidden'>PortFolio</p>
            </div>
            <div>
            <SocialLinks icons={icons} />
            </div>
       </div>
    </>
  )
}

export default Header
