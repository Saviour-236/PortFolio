import React from 'react'
import Image from 'next/image'
function Experience() {
  return (
    <>
    <section className='p-[1rem]'>
    <div className='items-center flex text-center justify-content-center text-[1rem]'>
       <div className='m-auto '><Image
        src='/experience.png'
        alt='experience.png'
        height={75}
        width={75}/></div> 
      </div>
      <div className='fullDiv p-[1rem] border-b-[1px] space-y-1 text-white'>
        <div className='logodiv rounded-full items-center'>
          <Image
           src="/phfLogo.png"
           alt="project picture"
           width={50}
           height={50}
          /></div>
        <div className='postnameDiv'>Wordpress Developer</div>
        <div className='companyNameDiv'>PHF Leasing</div>
        <div className='TimeDiv'>dd/mm/yyyy To dd/mm/yyyy</div>
      </div>
    </section>
    </>
  )
}

export default Experience