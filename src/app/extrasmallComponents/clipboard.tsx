'use client'
import React, { useState } from 'react'
import { IoMdCopy } from "react-icons/io";
function clipboard(prop:any) {
    const [dataToCopy,setDataToCopy] = useState(Object.values(prop))
    const copyToClipboard = async ( arg:any ) => {
        try {
         await navigator.clipboard.writeText(arg);
         console.log('done',arg)
        } catch (err) {
         console.error('Unable to copy text to clipboard', err);
        }
       };  
  return (
    <>
        <button onClick = {()=>copyToClipboard(dataToCopy)} className='text-white' >
           <IoMdCopy /> 
        </button>
    </>
  )
}

export default clipboard
