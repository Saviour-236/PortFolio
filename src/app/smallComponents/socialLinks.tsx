'use client'
import React ,{useEffect, useState} from 'react'
import Clipboard from '../extrasmallComponents/clipboard'
import { CiMobile3 } from "react-icons/ci"
import { IoMailOpenOutline } from "react-icons/io5"
import { CiLocationOn } from "react-icons/ci"
import { MdOutlineContacts } from "react-icons/md"
import { BsCopy } from "react-icons/bs";
    
export default function SocialLinks(icons:any) {
  const [data,setData]=useState(icons)
  const a = icons.icons.map((item:any) => (
    <button className='flex space-x-[0.5rem]' onClick={()=>copyData(item.detail)}>
      {item.icon}
      <Clipboard data = {item.detail}/>
    </button>
  ))
  const [copied,setCopied] = useState(false) //for pop up when text copied
  const [active,setactive] =useState(false)//for dropmenu to perfrom onclick event
  const [icons1,seticons] = useState([
    {icon:<CiMobile3 />,detail:'+91 6230930041',id:1,copyicon:<BsCopy />},
    {icon:<IoMailOpenOutline />,detail:'thakursureshkumar118@gmail.com',id:2,             copyicon:<BsCopy />} ,
    {icon:<CiLocationOn />,detail:'vill Kareu, Po Ohra, Teh Bhalai,Distt Chamba,HP',id:3,copyicon:<BsCopy />}]);// icons compoent and detail
    const dropMenu = ( ) => {
    const handleClick =() =>{
      setactive(!active);
      
    } //changing the active state according to click
    
    const iconDetail = icons1.map((item:any) => (
      <div key={item.id} className='flex  items-center text-[0.8rem] space-x-[6rem] rounded bg-[#1a1b1c] p-[0.5rem] font-bold' >
        {item.detail} 
        <button onClick={()=>setCopied(true)}><Clipboard props = {item.detail} /></button>
      </div> 
      
      ));
      
     //return a complete div with icons and detail 
     //below DropMenu icon 
     return(
      <>
        <div className='text-white place-items-center text-[1rem] ' >
         <button onClick={handleClick}>
          <MdOutlineContacts className='text-white ' />
         </button>
  
         { active ?
           (<div className='absolute w-fit  mt-[1rem] ml-[-80vw] w-[80vw] place-items-center w-[2rem] text-[1rem]'>{iconDetail} 
           {copied?<div className=' font-serif font-bold bg-[#1a1b1c]' >Copied </div>:<div className='hidden'>no</div>}
           </div>) : (
             <></>
            )
         }
        </div>
      </>
    )
  } // control of full drop menu 
  const b = setTimeout(() => {
    setCopied(false);
  }, 1000);
  const copyData = async (data:any) => {
      try {
       await navigator.clipboard.writeText(data);
       setCopied(true)
       {b}
      } catch (err) {
       console.error('Unable to copy text to clipboard');
      }
     };
  return (
    <>
    <div className='text-white items-center mr-[1rem]  space-x-[1rem] flex max-md:hidden ' >
    {copied?<div >Copied </div>:<div className='hidden'>no</div>}
     {a}
    </div>
      <div className='hidden relative max-md:flex'>
       {dropMenu()}
       
      </div>
   </>
  )
}
