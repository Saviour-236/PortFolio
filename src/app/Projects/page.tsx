
import React from 'react'
import Portfolio from './components/portfolio'
import Youtube from './components/Youtube'
function Projects() {
  
  return (
    <>
    <section>
      <div className='grid grid-cols-3 max-lg:grid-cols-1 grid-coulmn-gap-[1rem]'>
      < Portfolio />
      < Youtube />
      </div>
   
    </section>
    </>
  )
}

export default Projects