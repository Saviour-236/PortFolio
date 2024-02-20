import React from 'react'

function page() {
  return (
    <>
    <section className='flex justify-center  relative py-5' >
     <div className="bg-[url('https://static.vecteezy.com/system/resources/previews/022/653/879/non_2x/fantasy-island-with-waterfalls-3d-illustration-elements-of-this-image-furnished-by-nasa-generative-ai-free-photo.jpg')] opacity-70 bg-no-repeat bg-cover bg-center rounded text-white p-[7rem]">
      <form className='bg-white/10 rounded font-mono relative p-10 space-y-1 shadow-xl shadow-black'>
        <div className='space-y-[0.2rem]'>
         <label className='block text-black text-[1rem] font-serif'>
          <img src='/logInPage Data/nameIcon.webp' className='h-[3rem]'/>
        </label>
         <input className='rounded p-[0.5rem] placeholder-white  focus:outline-none focus:bg-blue-100 text-black font-bold shadow-md bg-transparent shadow-black/50 hover:bg-white/25 ' placeholder='Enter Your Full Name '>
         </input>
        </div>
        <div className='space-y-[0.2rem]'>
         <label className=' block text-black'>
          <img src='/logInPage Data/mail.webp' className='h-[2rem]'/>
         </label>
         <input className='rounded p-[0.5rem] placeholder-white  focus:outline-none focus:bg-blue-100 text-black font-bold shadow-md bg-transparent shadow-black/50 hover:bg-white/25 ' placeholder='Enter Your Email '></input>
        </div>
        <div className='space-y-[0.2rem]'>
        <label className='block text-black'>
         <img src='/logInPage Data/password.webp' className='h-[2rem]'/>
        </label>
        <input className='rounded p-[0.5rem] placeholder-white  focus:outline-none focus:bg-blue-100 text-black font-bold shadow-md bg-transparent shadow-black/50 hover:bg-white/25 ' placeholder='Enter Your Password '></input>
        </div>
        <div className='flex justify-end'>
          <button type='submit' className='rounded p-[0.5rem] space-x-[0.5rem] focus:outline-none focus:bg-blue-200 text-[#969592] shadow-md shadow-black/25 flex items-center hover:bg-blue-300 mt-3'>
            <p className='text-black font-mono font-semibold'>Create Account</p>
            <img src='/logInPage Data/create account icon.webp' className='h-[1rem]'/>
          </button>
        </div>
        <div className='flex justify-center relative bottom-[-0.7rem] space-x-3  '>
            <button>
              <img  src='/logInPage Data/google.webp' className='h-[2rem] ease-out hover:h-[4rem]'/>
            </button>
            <button>
             <img  src='/logInPage Data/github.webp' className='h-[2rem] ease-out hover:h-[4rem]'/>
            </button>
        </div>
      </form>
     </div>
    </section>
      </>
  )
}

export default page
