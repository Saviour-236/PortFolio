'use client'
import React, { useState, Suspense } from 'react'
import loading from './loading'
function Skills() {
  const [skills,setSills] = useState([
    {imgSrc:'/next.png',name:'Next.Js',disc:'',divCss:'relative  text-white',imgCss:'h-[5rem] bg-white rounded-full p-[0.2rem]',imgDivCss:' bg-white rounded rounded-full'},
    {imgSrc:'/React.png',name:'React.Js',disc:'',divCss:'relative',imgCss:'h-[5rem] w-[5rem]     rounded-full p-[0.2rem]  bg-black',imgDivCss:' bg-white p-[0.2rem] rounded-full'},
    {imgSrc:'/typescript.png',name:'TypeScript',disc:'',divCss:'relative',imgCss:'h-[5rem] w-[5rem]  rounded-full p-[0.2rem] bg-black',imgDivCss:'bg-white p-[0.2rem] rounded-full'},
    {imgSrc:'javascript.png',name:'JavaScript',disc:'',divCss:'relative',imgCss:'h-[5rem] w-[5rem]  rounded-full p-[0.2rem] bg-black',imgDivCss:'bg-white p-[0.2rem] rounded-full'},
    {imgSrc:'/tailwind.png',name:'TailwindCss',disc:'',divCss:'relative',imgCss:'h-[4rem] w-[6rem] ',imgDivCss:' p-[0.2rem] rounded-full'},
    {imgSrc:'/node.png',name:'Node.JS',disc:'',divCss:'relative',imgCss:'h-[5rem] w-[6rem]  rounded-full  bg-black',imgDivCss:'bg-white p-[0.2rem] rounded-full'},
    {imgSrc:'/express.png',name:'Express.Js',disc:'',divCss:'relative',imgCss:'h-[5rem] w-[5rem]  rounded-full p-[0.1rem] bg-white',imgDivCss:'bg-white p-[0.2rem] rounded-full'},
    {imgSrc:'/mongodb.png',name:'MongoDb',disc:'',divCss:'relative',imgCss:'h-[5rem] w-[5rem]  rounded-full p-[0.2rem] bg-black',imgDivCss:'bg-white p-[0.2rem] rounded-full'},
    {imgSrc:'/C++.png',name:'C++',disc:'',divCss:'relative',imgCss:'  h-[6rem] w-[5rem]',imgDivCss:''},
    {imgSrc:'python.png',name:'Python',disc:'',divCss:'relative',imgCss:'h-[5rem] w-[5rem]  rounded-full p-[0.2rem] bg-black',imgDivCss:'bg-white p-[0.2rem] rounded-full'},
    {imgSrc:'wordpress.png',name:'WordPress',disc:'',divCss:'relative',imgCss:'h-[5rem] w-[5rem]  rounded-full p-[0.2rem] bg-black',imgDivCss:'bg-white p-[0.2rem] rounded-full'},
    {imgSrc:'git.png',name:'git',disc:'',divCss:'relative',imgCss:'h-[5rem] w-[5rem]  rounded-full p-[0.2rem] bg-black',imgDivCss:'bg-white p-[0.2rem] rounded-full'},
    {imgSrc:'github.png',name:'github',disc:'',divCss:'relative',imgCss:'h-[5rem] w-[5rem]  rounded-full p-[0.2rem] bg-white',imgDivCss:'bg-black p-[0.2rem] rounded-full'}
  ])
  function Loading(){
    return(
      <div className='opacity-[0] p-[2rem] rounded-full'></div>
    )
  }
  return (
  <>
    <div className='grid grid-cols-4  max-lg:grid-cols-3  text-white place-items-center m-[1rem] rounded bg-black-800/200 text-center bg-slate z-[] h-full max-lg:mb-[5rem] max-md:grid-cols-2 gap-4'> 
    {skills.map((x,index) =>(<Suspense fallback={<Loading/> } >
      <div key ={index} className={x.divCss} >
        <div className={x.imgDivCss} >< img src={x.imgSrc} className={x.imgCss}/></div>
        {x.name}
        {x.disc}
      </div></Suspense>
     ))}
   </div>
  </>
  )
}

export default Skills