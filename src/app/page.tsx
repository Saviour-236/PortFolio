'use client'
import React ,{Suspense, useState}from 'react'
import { CiImageOn } from "react-icons/ci";
function Loading() {
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
export default function Home() {
  const [a,seta] = useState(4)
return (
  <><Suspense fallback={<Loading/>}>
    < section className="antialiased bg-neutral-800/20   px-[1rem] shadow- [0_35px_60px_-15px_rgba(0,0,0,0.3)] font-serif rounded m-[20px] h-[65vh]  w-[90vw] ml-[3rem] mt-[2rem] max-xl:ml-[2rem] max-xl:mt-[10rem] max-sm:p-[0.4rem]  max-sm:m-auto max-sm:relative max-sm:px-[1rem] max-sm:w-[95vw]  ] space-y-[3rem]" >
                 <div className=' relative flex lg:hidden  h-[15rem]  w-[15rem] m-auto  rounded-full shadow-lg shadow-[#f2f0eb]  items-center align-middle overflow-hidden '  >
                    <img src='/myImg.jpeg' className='opacity-[0.6]'/>
                  </div>
          <div className=' flex m-auto items-center justify-center  h-fit  ' >
            <div className=' space-y-[3rem]  max-lg:m-auto max-sm: p-[0.3rem] max-xl:space-y-[1rem] '>
              <div className='   flex  items-center  max-lg:block max-sm:block '>
                <div className='  m-auto flex items-center space-x-[5rem] max-lg:space-x-[2rem] '>
                  <div className='text-white  '>
                    <p className='text-[2.5rem] max-lg:text-[1rem] max-sm:text-[0.8rem]  '>🙋‍♂️Hey Hi...</p>
                    <p className='text-[3.5rem] text-[#ffd54a] max-lg:text-[2rem] max-sm:text-[1rem] '> M Suresh Kumar </ p>
                    <p className="text-[1.5rem]  text-[#c7d6d4]  font-bold max-lg:text-[1.5rem] max-sm:text-[1rem] ">Your Next Web Development Asset</p>
                    <p className='text-[1.5rem] italic max-lg:text-[1.5rem] max-sm:text-[1rem]'>Let's connect and explore how my skills can contribute to your team's success.</p>
                  </div>
                  <div className=' relative flex max-lg:hidden  h-[15rem]  w-[15rem] m-auto  rounded-full shadow-lg shadow-[#f2f0eb]  items-center align-middle overflow-hidden '  >
                    <img src='/myImg.jpeg' className='opacity-[0.6]'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
   </section></Suspense>
  </>
    
)
}
