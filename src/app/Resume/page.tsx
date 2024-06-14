'use client';
import React from 'react';
import Image from 'next/image';

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Suresh-kumar-resume';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="text-white">
      <Image src="/downloading.png" alt="Download button" width={25} height={25} />
    </button>
  );
};

const Resume = () => {
  return (
    <section className="pb-[5rem] flex flex-col items-center">
      <div className="flex justify-center text-[1rem] mb-4">
        <Image src="/resume.png" alt="Resume Logo" height={75} width={75} />
      </div>
      <div className="text-white w-full">
        <div className="text-right mb-4">
          <DownloadButton />
        </div>
        <div className="mx-auto shadow-2xl shadow-[#dce7f7] rounded overflow-hidden max-w-[90%]">
          <Image src="/resume.jpg" alt="Resume" layout="responsive" width={1000} height={1000} />
        </div>
      </div>
    </section>
  );
};

export default Resume;
