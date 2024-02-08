'use client'
import React from 'react'
import Image from 'next/image';
function Resume() {
  const DownloadButton = () => {
    const handleDownload = () => {
      // Create a link element
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'resume'; // Set the filename for the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link)
    };
  
    return (
      <button onClick={handleDownload} className='text-white'>Download Image</button>
    );
  };
  return (
    <section className='pb-[5rem] items-center'><div className='text-white'>Resume 
    <DownloadButton/>
    <div><Image
           src="/resume.jpg"
           alt="project picture"
           width={1000}
           height={1000}
          /></div>
    </div></section>
  )
}

export default Resume