'use client'
import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import { MdOutlineVideoCall } from "react-icons/md";
import { LuBell } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
function header() {
    const [logo,setlogo]=useState(<FaRegUserCircle />)
  return (
    <div className='text-black flex place-content-between h-fit'>
      <div className='text-black   border-[#000000] w-[25%] space-x-3 flex'>
        <button className='text-[#000000] text-[1.5rem] '>
         <IoMdMenu />
        </button><button>
         <img src='/youTubeAllImages/youtube.png ' className='h-[2.5rem] w-fit '/>
        </button>
        
      </div>
      <div className=' text-[1.5rem] w-[50%] text-black flex items-center space-x-[1rem] justify-center'>
        <div className='items-center flex  w-[80%]  border rounded-full overflow-hidden place-content-around   h-[2.5rem] '>
           <input placeholder='Search' type='text' className='w-[85%] focus:border-[#ca3b4e] rounded-l-full px-[1rem] h-full text-[1rem]'/>
            <button className='border-l bg-[#ebeae8] w-[15%] justify-center flex items-center h-full '>
               <CiSearch />
            </button>
        </div>
        <button className='rounded-full h-fit w-fit border p-2 text-[1rem] bg-slate-100 hover:bg-slate-200'>
           <FaMicrophone /> 
        </button>
      </div>
      <div className='w-[25%]  border-black  items-center justify-end space-x-5 text-[1.5rem] flex'>
        <button>
         <MdOutlineVideoCall />
        </button>
        <button className='relative p-[0.3rem] flex items-center'>
         <LuBell />
         <p className=' absolute top-[-0.3rem] right-[0] text-[0.9rem] rounded-full bg-red-600 text-white h-fit p-[0rem] ' > 
          a+
         </p>
        </button>
        <button>
            {logo}
        </button>
      </div>
    </div>
  )
}

export default header