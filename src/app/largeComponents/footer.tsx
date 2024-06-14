'use client';
import React, { useState } from 'react';
import { CiCircleChevDown } from 'react-icons/ci';
import Link from 'next/link';

function Footer() {
  const [buttons] = useState([
    { name: 'Project', link: '/Projects', cls: 'bg-black' },
    { name: 'Skills', link: '/Skills', cls: 'bg-black' },
    { name: 'Experience', link: '/Experience', cls: 'bg-black' },
    { name: 'Resume', link: '/Resume', cls: 'bg-black' },
    { name: 'Contacts', link: '/Contacts', cls: 'bg-black' },
  ]);

  const commonClasses = 'h-fit rounded p-[0.5rem] m-[1rem] w-fit flex items-center space-x-[1rem] shadow-md hover:shadow-lg hover:shadow-[#d9d6d0] shadow-[#d9d6d0] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110';

  return (
    <div className='sticky bottom-0 animate-pulse text-white text-[1rem] flex justify-center w-full z-[1]'>
      {buttons.map((x, index) => (
        <Link href={x.link} key={index}>
          <button className={`${commonClasses} ${x.cls}`}>
            {x.name}
            <CiCircleChevDown className='ml-[1rem]' />
          </button>
        </Link>
      ))}
    </div>
  );
}

export default Footer;
