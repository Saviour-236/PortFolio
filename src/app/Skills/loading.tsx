'use client'
import React, { useState } from 'react'
function loading() {
  const [skills,setSills] = useState([
    {divCss:'relative space-y-[1rem] animate-pulse',imgDivCss:'p-[2rem] rounded-full bg-[#bec2bf] rounded rounded-full',textDiv:'p-[0.7rem] bg-[#bec2bf] rounded  '},
    {divCss:'relative space-y-[1rem] animate-pulse',imgDivCss:'p-[2rem] rounded-full bg-[#bec2bf] rounded rounded-full',textDiv:'p-[0.7rem] bg-[#bec2bf] rounded  '},
    {divCss:'relative space-y-[1rem] animate-pulse',imgDivCss:'p-[2rem] rounded-full bg-[#bec2bf] rounded rounded-full',textDiv:'p-[0.7rem] bg-[#bec2bf] rounded  '},
    {divCss:'relative space-y-[1rem] animate-pulse',imgDivCss:'p-[2rem] rounded-full bg-[#bec2bf] rounded rounded-full',textDiv:'p-[0.7rem] bg-[#bec2bf] rounded  '},
    {divCss:'relative space-y-[1rem] animate-pulse',imgDivCss:'p-[2rem] rounded-full bg-[#bec2bf] rounded rounded-full',textDiv:'p-[0.7rem] bg-[#bec2bf] rounded  '},
    {divCss:'relative space-y-[1rem] animate-pulse',imgDivCss:'p-[2rem] rounded-full bg-[#bec2bf] rounded rounded-full',textDiv:'p-[0.7rem] bg-[#bec2bf] rounded  '},
    {divCss:'relative space-y-[1rem] animate-pulse',imgDivCss:'p-[2rem] rounded-full bg-[#bec2bf] rounded rounded-full',textDiv:'p-[0.7rem] bg-[#bec2bf] rounded  '},
    {divCss:'relative space-y-[1rem] animate-pulse',imgDivCss:'p-[2rem] rounded-full bg-[#bec2bf] rounded rounded-full',textDiv:'p-[0.7rem] bg-[#bec2bf] rounded  '},
    {divCss:'relative space-y-[1rem] animate-pulse',imgDivCss:'p-[2rem] rounded-full bg-[#bec2bf] rounded rounded-full',textDiv:'p-[0.7rem] bg-[#bec2bf] rounded  '},{divCss:'relative space-y-[1rem] animate-pulse',imgDivCss:'p-[2rem] rounded-full bg-[#bec2bf] rounded rounded-full',textDiv:'p-[0.7rem] bg-[#bec2bf] rounded  '},{divCss:'relative space-y-[1rem] animate-pulse',imgDivCss:'p-[2rem] rounded-full bg-[#bec2bf] rounded rounded-full',textDiv:'p-[0.7rem] bg-[#bec2bf] rounded  '},
    {divCss:'relative space-y-[1rem] animate-pulse',imgDivCss:'p-[2rem] rounded-full bg-[#bec2bf] rounded rounded-full',textDiv:'p-[0.7rem] bg-[#bec2bf] rounded  '},{divCss:'relative space-y-[1rem] animate-pulse',imgDivCss:'p-[2rem] rounded-full bg-[#bec2bf] rounded rounded-full',textDiv:'p-[0.7rem] bg-[#bec2bf] rounded  '}
  ])
  return (
    <>
     <div className='grid grid-cols-4 space-y-[1rem] max-lg:grid-cols-3  place-items-center m-[1rem] rounded bg-black-800/200 text-center h-full max-lg:mb-[5rem] max-md:grid-cols-2 gap-4'> 
      {skills.map(x =>(
      <div className={x.divCss}>
        <div className={x.imgDivCss}></div>
        <div className={x.textDiv}></div>
      </div>
     ))}
   </div>
    </>
  )
}

export default loading