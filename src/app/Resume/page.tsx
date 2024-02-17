'use client'
import React from 'react'
import Image from 'next/image';
function Resume() {
  const DownloadButton = () => {
    const handleDownload = () => {
      // Create a link element
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Suresh-kumar-resume'; // Set the filename for the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link)
    };
  
    return (
      <button onClick={handleDownload} className='text-white'><Image
      src="/downloading.png"
      alt="Download button"
      width={25}
      height={25}
     /></button>
    );
  };
  return (
    <section className='pb-[5rem] items-center  '>
      <div className='items-center flex text-center justify-content-center text-[1rem]'>
       <div className='m-auto '><Image
        src='/resume.png'
        alt='resume Logo'
        height={75}
        width={75}/></div> 
      </div>
      <div className='text-white'>
    <div className='text-right'><DownloadButton/></div>
    <div className='mx-auto w-fit shadow-2xl shadow-[#dce7f7] rounded overflow-hidden'>
      <Image
           src="/resume.jpg"
           alt="Resume"
           width={1000}
           height={1000}
          /></div>
    </div></section>
  )
}

export default Resume