'use client'
import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import Link from 'next/link'
function page() {
  const[visiblePassword,setVisiblePassword] = useState<boolean>(false)
  return (
  <>
  <section className=' items-center space-y-3 text-white p-[1rem]'>
    <p className='text-center'>Sign In</p>
    <form className=' border m-auto p-[1rem] space-y-3 w-fit  bg-black/50 rounded'>
      <div className='space-y-[0.5rem]'>
       <label className='block' >Email</label>
       <input type='text' placeholder='Regesterd Email' className='text-black rounded p-[0.3rem]  outline-none ' ></input>
      </div>
      <div className='space-y-[0.5rem]'>
      <label className='block'>Password</label>
      <input type={visiblePassword ? 'text':'password'} placeholder='Password' className='text-black rounded p-[0.3rem]  outline-none ' ></input>
      <button type="button" onClick={()=>{setVisiblePassword(!visiblePassword)}} className='ml-[0.5rem] '>
       {visiblePassword ? <FaRegEyeSlash /> : <FaRegEye />}
      </button>
      </div>
      <div className='flex  justify-end   '>
      <button type='submit' className='rounded p-[0.3rem] space-x-[0.5rem] hover:scale-110 transition duration-150 ease-in text-[#969592] shadow-md border flex items-center '>
            <p className='text-white '>
            SignIn
              </p> 
            <img src='/logInPage Data/create account icon.webp' className='h-[1rem]'/>
          </button>
      </div>
    </form>
    <div className='flex justify-center relative bottom-[-0.7rem] space-x-3  '>
            <button>
              <img  src='/logInPage Data/google.webp' className='h-[2rem] duration-300 ease-out hover:h-[2.5rem]'/>
            </button>
            <button>
             <img  src='/logInPage Data/github.webp' className='h-[2rem] ease-out duration-300 hover:h-[2.5rem]'/>
            </button>
            <Link href={'signup'}>Sign Up</Link>
        </div>
  </section>
  </>
  )
}

export default page