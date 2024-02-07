'use client'
import React from 'react'
import { CiImageOn } from "react-icons/ci";
function loading() {
  return (
    <>
        < section className="antialiased  px-[1rem] shadow- [0_35px_60px_-15px_rgba(0,0,0,0.3)] font-serif rounded m-[20px] h-[65vh]  w-[90vw] ml-[3rem] mt-[2rem] max-xl:ml-[2rem] max-xl:mt-[10rem] max-sm:p-[0.4rem]  max-sm:m-auto max-sm:relative max-sm:px-[1rem] max-sm:w-[95vw]   " >
          <div className=' flex m-auto items-center justify-center  h-[90%] max-md:h-[80%]  ' >
            <div className=' space-y-[3rem]  max-lg:m-auto max-sm: p-[0.3rem] max-xl:space-y-[1rem] '>
              <div className='   flex  items-center  max-lg:block max-sm:block '>
                <div className=' animate-pulse m-auto flex items-center space-x-[5rem] max-lg:space-x-[2rem] '>
                  <div className='  space-y-[1rem] '>
                    <p className='p-[1rem] rounded max-lg:text-[1rem] max-sm:text-[0.8rem] w-[10rem] bg-zinc-300 '></p>
                    <p className=' p-[0.9rem] w-[15rem] rounded bg-zinc-300 max-lg:text-[2rem] max-sm:text-[1rem] '>  </ p>
                    <p className="p-[0.8rem] rounded w-[20rem] bg-zinc-300  text-[1.5rem]  text-[#c7d6d4]  font-bold max-lg:text-[1.5rem] max-sm:text-[1rem] "></p>
                    <p className='p-[0.7rem] rounded  w-[25rem] bg-zinc-300   text-[1.5rem] italic max-lg:text-[1.5rem] max-sm:text-[1rem]'></p>
                  </div>
                  <div className=' text-white rounded relative flex  m-auto bg-[#a6aba7]   items-center align-middle  max-md:hidden text-[15rem]  '  >
                  <CiImageOn />
                  </div>
                </div>
              </div>
            </div>
          </div>
   </section>
    </>
  )
}

export default loading