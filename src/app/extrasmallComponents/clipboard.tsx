'use client'
import React, { useState } from 'react'
import { IoMdCopy } from "react-icons/io";
function clipboard(prop:any) {
  const jsonString = JSON.stringify(prop);
  console.log(typeof prop)
  const [dataToCopy,setDataToCopy] = useState<any>()
  const [buttonClass,setButtonClass]= useState('text-white text-[0.8rem] ')
  const [copied,setCopied]=useState(false)
  const handleClick = async ( arg:any ) => {
    if (arg==Object){
      setDataToCopy(Object.values(arg))
    }
    else{
      setDataToCopy(arg)
      console.log(typeof arg)
    }
    try {
      await navigator.clipboard.writeText(arg);
      setCopied(true);
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
