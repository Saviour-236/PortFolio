'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Clipboard from '../extrasmallComponents/clipboard'
function contacts() {
  const [phoneNo,setPhoneNo]= useState('+91 6230930041')
  return (
    <section className='text-white'>
     <div className='text-white flex items-center'>
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
     <div className='text-white flex items-center '>
     <Image
      src='/email.png'
      alt='emailaddress'
      width={90}
      height={90}/>
      <p>
        thakursureshkumar118@gmail.com
      </p>
     </div>
     <div className='text-white flex items-center'>
     <Image
      src='/loc.png'
      alt='phone img'
      width={90}
      height={90}/>
      <p>
      vill Kareu, Po Ohra, Teh Bhalai,Distt Chamba,HP
      </p>
     </div>
    </section>
  )
}

export default contacts