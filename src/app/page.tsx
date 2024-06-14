'use client';
import React, { Suspense, useState } from 'react';
import { CiImageOn } from 'react-icons/ci';

function Loading() {
  return (
    <section className="antialiased px-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] font-serif rounded m-5 h-[65vh] w-[90vw] mx-12 mt-8 max-xl:mx-8 max-xl:mt-40 max-sm:px-2 max-sm:mx-auto max-sm:relative max-sm:w-[95vw]">
      <div className="flex m-auto items-center justify-center h-[90%] max-md:h-[80%]">
        <div className="space-y-12 max-lg:m-auto max-sm:px-1 max-xl:space-y-4">
          <div className="flex items-center max-lg:block max-sm:block">
            <div className="animate-pulse m-auto flex items-center space-x-20 max-lg:space-x-8">
              <div className="space-y-4">
                <p className="p-4 rounded max-lg:text-sm max-sm:text-xs w-40 bg-zinc-300"></p>
                <p className="p-3 w-60 rounded bg-zinc-300 max-lg:text-xl max-sm:text-sm"></p>
                <p className="p-2 rounded w-80 bg-zinc-300 text-lg text-[#c7d6d4] font-bold max-lg:text-lg max-sm:text-sm"></p>
                <p className="p-2 rounded w-100 bg-zinc-300 text-lg italic max-lg:text-lg max-sm:text-sm"></p>
              </div>
              <div className="text-white rounded relative flex m-auto bg-[#a6aba7] items-center align-middle max-md:hidden text-[15rem]">
                <CiImageOn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [a, seta] = useState(4);

  return (
    <Suspense fallback={<Loading />}>
      <section className="bg-neutral-800/20 relative m-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] font-serif rounded h-fit w-fit p-4 space-y-3 pb-12">
        <div className="relative flex lg:hidden h-60 w-60 m-auto rounded-full shadow-lg shadow-[#f2f0eb] items-center align-middle overflow-hidden">
          <img src="/myImg.jpeg" className="opacity-60" alt="Profile" />
        </div>
        <div className="flex m-auto items-center justify-center h-fit">
          <div className="space-y-12 max-lg:m-auto max-sm:px-1 max-xl:space-y-4">
            <div className="flex items-center max-lg:block max-sm:block">
              <div className="m-auto flex items-center space-x-20 max-lg:space-x-8">
                <div className="text-white">
                  <div className="flex items-center">
                    <div>
                      <p className="text-2xl max-lg:text-sm max-sm:text-xs">🙋‍♂️Hey Hi...</p>
                      <p className="text-4xl text-[#ffd54a] max-lg:text-2xl max-sm:text-sm">M Suresh Kumar</p>
                    </div>
                    <div className="relative flex max-lg:hidden h-60 w-60 m-auto rounded-full shadow-lg shadow-[#f2f0eb] items-center align-middle overflow-hidden">
                      <img src="/myImg.jpeg" className="opacity-60" alt="Profile" />
                    </div>
                  </div>
                  <p className="text-lg text-[#c7d6d4] font-bold max-lg:text-lg max-sm:text-sm">Visionary Web Developer</p>
                  <p className="text-lg italic max-lg:text-lg max-sm:text-sm">
                    Igniting digital experiences with passion and purpose. Committed to excellence, I thrive on challenges and collaborate seamlessly to drive projects forward. Eager to embrace new technologies, lead by example, and cultivate an environment of continuous learning and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}
