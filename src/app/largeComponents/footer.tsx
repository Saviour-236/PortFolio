'use client'
import React,{useState} from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import Link from 'next/link'
function footer() {
    const a = [<FaFacebookSquare className='border-r-[1px] pr-[1rem] border-dashed text-[3rem]'/>,,<RiInstagramFill className='border-r-[1px] pr-[2rem] border-dashed text-[3rem]'/>,< FaSquareXTwitter className='border-r-[1px] pr-[2rem] border-dashed text-[3rem]'/>]
    
  return (
    <><div className='flex text-black space-x-[1rem]  '>{a.map((x)=>(<Link  href=''> {x}</Link>))}</div>
    </>
  )
}

export default footer

