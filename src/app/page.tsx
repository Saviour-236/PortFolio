'use client'
import React ,{useState}from 'react'
export default function Home() {
  const [buttonCss,setbuttonCss] = useState('h-fit rounded p-[0.8rem]   m-[1rem]  w-[5rem] flex p-[0.6rem] items-center  w-fit   hover:shadow-lg shadow-md hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50   hover:-translate-y-1 hover:scale-110 max-sm:p-[0.3rem]  ')
return (
  <>
    < section className="antialiased bg-neutral-800/20  absolute px-[1rem] shadow- [0_35px_60px_-15px_rgba(0,0,0,0.3)] font-serif rounded m-[20px] h-[65vh]  w-[90vw] ml-[3rem] mt-[2rem] max-xl:ml-[2rem] max-xl:mt-[10rem] max-sm:p-[0.4rem]  max-sm:m-auto max-sm:relative max-sm:px-[1rem] max-sm:w-[95vw]   " >
          <div className=' flex m-auto items-center justify-center  h-[90%] max-md:h-[80%]  ' >
            <div className=' space-y-[3rem]  max-lg:m-auto max-sm: p-[0.3rem] max-xl:space-y-[1rem] '>
              <div className='   flex  items-center  max-lg:block max-sm:block '>
                <div className='  m-auto flex items-center space-x-[5rem] max-lg:space-x-[2rem] '>
                  <div className='text-white  '>
                    <p className='text-[2.5rem] max-lg:text-[1rem] max-sm:text-[0.8rem]  '>🙋‍♂️Hey Hi...</p>
                    <p className='text-[3.5rem] text-[#ffd54a] max-lg:text-[2rem] max-sm:text-[1rem] '> M Suresh Kumar </ p>
                    <p className="text-[1.5rem]  text-[#c7d6d4]  font-bold max-lg:text-[1.5rem] max-sm:text-[1rem] ">Your Next Web Development Asset</p>
                    <p className='text-[1.5rem] italic max-lg:text-[1.5rem] max-sm:text-[1rem]'>Let's connect and explore how my skills can contribute to your team's success.</p>
                  </div>
                  <div className=' relative flex  m-auto    items-center align-middle  max-md:hidden   '  >
                    <img src='https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010130.jpg?size=626&ext=jpg&uid=R122479474&ga=GA1.1.1034689284.1705596486&semt=ais' className='opacity-[0.6] h-[15rem] max-lg:h[15rem] w-[20rem]  rounded '/>
                  </div>
                </div>
              </div>
            </div>
          </div>
   </section>
  </>
    
)
}
