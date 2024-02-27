'use client'
import React ,{useEffect, useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
import { create } from 'domain'
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
export default function Page() {
  const router = useRouter();
  const [allFilled , setAllfilled] = useState(false)
  const [user , setUser] = useState({
    fullName: '' ,
    email:'',
    password: '',
  })
  useEffect(()=>{
   if(user.email.length > 0 && user.fullName.length > 0 && user.password.length > 0){
   setAllfilled(true)
   }
   else{
    setAllfilled(false)
   }
  },[user])
  const [loading, setLoading] = useState(false)

  const signUp = async (e:any) =>{
    e.preventDefault();
    try {
      
      await axios.post('/api/users/signup', user);
      router.push('signIn')
    } catch (error:any) {
      console.log('sign up failed',error.message)
      toast.error('sign up failed');
    }
  }

  return (
    <>
    <section className='flex justify-center  w-full overflow-auto   py-5' >
    <Toaster />
     <div className=" rounded text-white ">
     <div className='text-black text-center m-[0.5rem] flex items-center  font-bold '>
      <p className=' m-auto text-white '>Create Account</p> 
     </div>
      <form onSubmit={signUp} className='bg-black/50 rounded font-mono  p-10 space-y-1 shadow-sm shadow-white'>
        <div className='space-y-[0.2rem]'>
         <label className='block text-[1rem] font-serif'>
          <img src='/logInPage Data/nameIcon.webp' className='h-[3rem]'/>
        </label>
         <input 
          type='text'
          id='fullName'
          value={user.fullName} 
          onChange={(e) => {setUser({...user , fullName: e.target.value})}}
          className='rounded p-[0.5rem] placeholder-white  focus:outline-none   font-bold shadow-md bg-transparent shadow-black/50 hover:bg-white/25 ' placeholder=' Full Name '>
         </input>
        </div>
        <div className='space-y-[0.2rem]'>
         <label className=' block '>
          <img src='/logInPage Data/mail.webp' className='h-[2rem]'/>
         </label>
         <input 
          type='text'
          id='email'
          value={user.email} 
          onChange={(e) => {setUser({...user , email: e.target.value})}}
          className='rounded p-[0.5rem] placeholder-white  focus:outline-none   font-bold shadow-md bg-transparent shadow-black/50 hover:bg-white/25 ' placeholder=' Email '>
         </input>
        </div>
        <div className='space-y-[0.2rem]'>
        <label className='block '>
         <img src='/logInPage Data/password.webp' className='h-[2rem]'/>
        </label>
        <input 
          id='password'
          type='password'
          className='rounded p-[0.5rem] placeholder-white  focus:outline-none  font-bold shadow-md bg-transparent shadow-black/50 hover:bg-white/25 ' 
          value={user.password} 
          onChange={(e) => {setUser({...user , password: e.target.value})}}
          placeholder=' Password '>
        </input>
        </div>
        <div className='flex justify-end'>
          <button type='submit' className='rounded p-[0.5rem] space-x-[0.5rem] focus:outline-none  text-[#969592] shadow-md shadow-black/25 flex items-center hover:bg-blue-100/10 mt-3'>
            <p className='text-white '>
              { allFilled ? 'signUp' : 'please fill all the fields'}
              </p> 
            <img src='/logInPage Data/create account icon.webp' className='h-[1rem]'/>
          </button>
        </div>
        <div className='flex justify-center items-center relative bottom-[-0.7rem] space-x-3  '>
            <button>
              <img  src='/logInPage Data/google.webp' className='h-[2rem] duration-300 ease-out hover:h-[2.5rem]'/>
            </button>
            <button>
             <img  src='/logInPage Data/github.webp' className='h-[2rem] ease-out duration-300 hover:h-[2.5rem]'/>
            </button>
            <Link href={'signIn'} className='hover:underline'>Sign In</Link>
        </div>
      </form>
     </div>
    </section>
      </>
  )
}


