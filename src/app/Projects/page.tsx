import Image from 'next/image'
import React from 'react'
import Portfolio from './components/portfolio'
import Youtube from './components/Youtube'
function Projects() {
  
  return (
    <>
    <section>
    <div className='items-center flex text-center justify-content-center text-[1rem]'>
       <div className='m-auto'><Image
        src='/project.png'
        alt='project.png'
        height={100}
        width={100}/>
        </div> 
      </div>
      <div className='grid grid-cols-3 max-lg:grid-cols-1 grid-coulmn-gap-[1rem]'>
      < Portfolio />
      < Youtube />
      </div>
   
    </section>
    </>
  )
}

export default Projects