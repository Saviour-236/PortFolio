'use client'
import React ,{useState} from 'react'
import Clipboard from '../extrasmallComponents/clipboard'
import { CiMobile3 } from "react-icons/ci"
import { IoMailOpenOutline } from "react-icons/io5"
import { CiLocationOn } from "react-icons/ci"
import { MdOutlineContacts } from "react-icons/md"
import { BsCopy } from "react-icons/bs";
  const dropMenu = ( ) => {

  const [active,setactive] =useState(false)//for dropmenu to perfrom onclick event
  const [icons,seticons] = useState([
    {icon:<CiMobile3 />,detail:'+91 6230930041',id:1,copyicon:<BsCopy />},
    {icon:<IoMailOpenOutline />,detail:'thakursureshkumar118@gmail.com',id:2,             copyicon:<BsCopy />} ,
    {icon:<CiLocationOn />,detail:'vill Kareu, Po Ohra, Teh Bhalai,Distt Chamba,HP',id:3,copyicon:<BsCopy />}]);// icons compoent and detail
  const handleClick =() =>{
    setactive(!active);
     
  } //changing the active state according to click
  const iconDetail = icons.map((item) => (
    <div key={item.id} className='flex items-center items-right rounded bg-[#014c57] p-[0.5rem] font-bold' >
      {item.detail} 
      <Clipboard props = {item.detail} />
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
         (<div className='absolute   mt-[1rem] w-auto place-items-center w-[2rem] '>{iconDetail}</div>) : (
           <></>
          )
       }
      </div>
    </>
  )
} // control of full drop menu 
const copyData = async (data:any) => {
    try {
     await navigator.clipboard.writeText(data);
     console.log('done',data)
    } catch (err) {
     console.error('Unable to copy text to clipboard');
    }
   };  
export default function SocialLinks(icons:any) {
  const [data,setData]=useState(icons)
  const a = icons.icons.map((item:any) => (
    <button onClick={()=>copyData(item.detail)}>
      {item.icon}
    </button>
  ))
  return (
    <>
    <div className='text-white items-center mr-[1rem]  space-x-[1rem] flex max-md:hidden ' >
     {a}
    </div>
      <div className='hidden relative max-md:flex'>
       {dropMenu()}
      </div>
   </>
  )
}
