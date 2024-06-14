'use client';
import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { CiMobile3, CiLocationOn } from 'react-icons/ci';
import { IoMailOpenOutline } from 'react-icons/io5';
import { MdOutlineCloudDownload } from 'react-icons/md';
import { FaInstagram, FaHome } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { LuLinkedin } from 'react-icons/lu';
import Image from 'next/image';

function Loading() {
  return (
    <div className='bg-[#969494] flex rounded place-content-between space-y-3 p-[1rem]'>
      <div className='flex space-x-3 items-center'>
        <div className='h-[1.5rem] w-[1.5rem] bg-[#d1c9c9] p-[1.5rem] rounded-full'></div>
        <div className='h-[1.5rem] w-[9rem] bg-[#d1c9c9] p-[0.5rem] rounded'></div>
      </div>
      <div className='flex space-x-2'>
        <div className='h-[1rem] w-[1rem] bg-[#d1c9c9] p-[1rem] rounded-full'></div>
        <div className='h-[1rem] w-[1rem] bg-[#d1c9c9] p-[1rem] rounded-full'></div>
        <div className='h-[1rem] w-[1rem] bg-[#d1c9c9] p-[1rem] rounded-full'></div>
        <div className='h-[1rem] w-[1rem] bg-[#d1c9c9] p-[1rem] rounded-full'></div>
      </div>
    </div>
  );
}

function Header() {
  const [socialIcons] = useState([
    { icon: <FaInstagram />, link: 'https://www.instagram.com/saviour_11235?igsh=MXNudXFwbXY2NG92bw==' },
    { icon: <LuLinkedin />, link: 'https://www.linkedin.com/in/suresh-kumar-thakur-8b74bb263/' },
    { icon: <FiGithub />, link: 'https://github.com/Saviour-236' },
    { icon: <FaXTwitter />, link: 'https://twitter.com/X7Saviour' },
  ]);

  const [logoClicked, setLogoClicked] = useState(false);
  const profileImage = '/hanumanji.webp';

  return (
    <Suspense fallback={<Loading />}>
      <div className="item-center z-[1] sticky top-0 flex place-content-between h-fit-content items-center text-[1.3rem] font-serif">
        <div className='flex items-center mx-[1rem] m-[0.5rem] max-lg:m-[0rem] text-white space-x-[3rem] max-lg:space-x-[1rem] font-bold'>
          <button onClick={() => setLogoClicked(!logoClicked)} className='rounded-full border items-center overflow-hidden'>
            {logoClicked ? (
              <div className='absolute top-0 left-0 h-[100vh] w-[100vw] border flex z-[10001] bg-gray-500/30 justify-center'>
                <Image src={profileImage} alt="Profile Pic" width={600} height={600} />
              </div>
            ) : (
              <Image src={profileImage} alt="Profile Pic" width={50} height={50} />
            )}
          </button>
          <p className='max-lg:hidden'>Visionary Web Developer</p>
        </div>
        <div className='text-white flex space-x-[1rem] items-center'>
          <Link href='.' className='flex items-center space-x-1'>
            <FaHome className='text-white text-[0.8rem] rounded' />Home
          </Link>
          {socialIcons.map((x, index) => (
            <Link href={x.link} key={index}>{x.icon}</Link>
          ))}
        </div>
      </div>
    </Suspense>
  );
}

export default Header;
