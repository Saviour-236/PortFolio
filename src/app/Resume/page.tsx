'use client'
import React from 'react'
import Image from 'next/image';
function Resume() {
  const DownloadButton = () => {
    const handleDownload = () => {
      // Create a link element
      const link = document.createElement('a');
      link.href = '/';
      link.download = 'resume'; // Set the filename for the downloaded file
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
    <section className='pb-[5rem] items-center'>
      <div className='text-white'>
    <div className='text-right'><DownloadButton/></div>
    <div><Image
           src=""
           alt="Resume"
           width={1000}
           height={1000}
          /></div>
    </div></section>
  )
}

export default Resume