'use client'
import React, { useState ,useEffect} from 'react'
import { IoMdCopy } from "react-icons/io";
function clipboard(prop:any) {
  const [dataToCopy,setDataToCopy] = useState<any>( Object.values(prop) )
  const [buttonClass,setButtonClass]= useState('text-white text-[0.8rem] ')
  const [copied,setCopied]=useState(false)
  const handleClick = async ( arg:any )=>
  {
    try {
      await navigator.clipboard.writeText(arg);
      setCopied(true);
      console.log(arg)
      setTimeout(()=>setCopied(false),200);
      } catch (err) {
       console.error('Unable to copy text to clipboard', err);
      }
  };
 //it will copy data 
  return (
    <>
    <button onClick = {()=>handleClick(dataToCopy)} className={buttonClass} >
    {copied?<p>copied</p>:<IoMdCopy />} 
    </button>
    </>
  )//returning button which is  a copy icon
}

export default clipboard