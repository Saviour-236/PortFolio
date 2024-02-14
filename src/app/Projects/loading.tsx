import React from 'react'

function loading() {
  return (
    <>
    <section>
      <div className='grid grid-cols-3 max-lg:grid-cols-1 grid-coulmn-gap-[1rem]'>
      <div className='text-white  border-b-[1px] pb-[1rem] border-gray-50 space-y-[0.5rem]'>
          <div className='mb-[0.5rem] p-[2.5rem] bg-slate-300 w-[3rem] rounded items-center '></div>
           <p className='bg-slate-300 w-[8rem] p-[1rem] rounded'></p> 
         </div>
         <div className='text-white  border-b-[1px] pb-[1rem] border-gray-50 space-y-[0.5rem]'>
          <div className='mb-[0.5rem] p-[2.5rem] bg-slate-300 w-[3rem] rounded items-center '></div>
           <p className='bg-slate-300 w-[8rem] p-[1rem] rounded'></p> 
         </div>
      </div>
   
    </section>
    </>
  )
}

export default loading