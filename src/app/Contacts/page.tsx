'use client'
import React, { Suspense, useState } from 'react'
import Image from 'next/image'
import Clipboard from '../extrasmallComponents/clipboard'
function Loading(){
  return(
  <section className='text-white'>
     <div className='text-white space-x-[2rem] flex items-center'>
     <div className='bg-slate-300 p-[2rem] rounded-full '></div>
      <p className='p-[0.8rem] rounded w-[9rem] bg-slate-300'>
       
      </p>
     </div>
     <div className='text-white space-x-[2rem] flex items-center'>
     <div className='bg-slate-300 p-[2rem] rounded-full '></div>
      <p className='p-[0.8rem] rounded w-[9rem] bg-slate-300'>
       
      </p>
     </div>
     <div className='text-white space-x-[2rem] flex items-center'>
     <div className='bg-slate-300 p-[2rem] rounded-full '></div>
      <p className='p-[0.8rem] rounded w-[9rem] bg-slate-300'>
       
      </p>
     </div>
    </section>)
}
function contacts() {
  const [phoneNo,setPhoneNo]= useState('+91 6230930041')
  const [mail,setmail] = useState('thakursureshkumar118@gmail.com')
  const [address,setAddress] = useState('vill Kareu, Po Ohra, Teh Bhalai,Distt Chamba,HP')
  return (<Suspense fallback={<Loading />}>
    <section className='text-white'>
      <div className='items-center flex text-center justify-content-center text-[1rem]'>
       <div className='m-auto '><Image
        src='/contacts.webp'
        alt='contact Logo'
        height={45}
        width={45}/></div> 
      </div>
      
     <div className='text-white flex space-x-[1rem] items-center'>
     <Image
      src='/phone.png'
      alt='phone img'
      width={90}
      height={90}/>
      <p>
        +91 6230930041
      </p>
      <Clipboard prop ={phoneNo}/>
     </div>
     <div className='text-white flex space-x-[1rem] items-center '>
     <Image
      src='/email.png'
      alt='emailaddress'
      width={90}
      height={90}/>
      <p>
        thakursureshkumar118@gmail.com
      </p>
      <Clipboard prop ={mail}/>
     </div>
     <div className='text-white space-x-[1rem] flex items-center'>
     <Image
      src='/loc.png'
      alt='phone img'
      width={90}
      height={90}/>
      <p>
      Vill Kareu, Po. Ohra, Teh. Bhalai,Distt. Chamba [HP]
      </p>
      <Clipboard prop ={address}/>
     </div>
    </section></Suspense>
  )
}

export default contacts