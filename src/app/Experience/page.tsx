import React from 'react'
import Image from 'next/image'
function Experience() {
  return (
    <>
    <section className='p-[1rem]'>
      <div className='fullDiv p-[1rem] border-b-[1px] space-y-1 text-white'>
        <div className='logodiv'>
          <Image
           src="/React.png"
           alt="project picture"
           width={30}
           height={30}
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