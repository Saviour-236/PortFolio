'use client'
import React ,{useEffect, useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
function page() {
  const router = useRouter();
  const[visiblePassword,setVisiblePassword] = useState<boolean>(false)
  const [allFilled , setAllfilled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [user , setUser] = useState({
    email:'',
    password: '',
  })
  const toastForAllFilledMessage=()=>(toast('please fill all the fields'))
  useEffect(()=>{
    if(user.email.length > 0 && user.password.length > 0){
    setAllfilled(true)
    }
    else{
     setAllfilled(false)
    }
   },[user])
  const signIn = async (e:any) =>{
    e.preventDefault();
    try {
      toast('processing')
      const response = await axios.post('/api/users/login', user);
      router.push('DashBoard')
      toast.success(response.data.massege)
    } catch (error:any) {
      toast.error(error.message);
    }finally{
        setLoading(false)
    }
  }
  return (
  <>
  <section className=' items-center space-y-3 text-white p-[1rem]'>
  <Toaster />
    {loading ? <p>vsigning In </p> : <p className='text-center'>Sign In</p>}
    <form className=' border m-auto p-[1rem] space-y-3 w-fit  bg-black/50 rounded'>
      <div className='space-y-[0.5rem]'>
       <label className='block' >Email</label>
       <input 
       type='text' 
       placeholder='Regesterd Email' 
       className='text-black rounded p-[0.3rem]  outline-none '
       value={user.email} 
       onChange ={(e) => {setUser({...user , email: e.target.value})}} >
       </input>
      </div>
      <div 
      className='space-y-[0.5rem]'>
      <label 
      className='block'>
        Password
      </label>
      <input 
      type={visiblePassword ? 'text':'password'} 
      placeholder='Password' 
      className='text-black rounded p-[0.3rem]  outline-none ' 
      value={user.password} 
      onChange ={(e) => {setUser({...user , password: e.target.value})}}>
      </input>
      <button type="button" onClick={()=>{setVisiblePassword(!visiblePassword)}} className='ml-[0.5rem] '>
       {visiblePassword ? <FaRegEyeSlash /> : <FaRegEye />}
      </button>
      </div>
      <div className='flex  justify-end   '>
      { allFilled ? 
             <button 
             type='button' 
             className='rounded p-[0.5rem] space-x-[0.5rem] focus:outline-none  text-[#969592] shadow-md shadow-black/25 flex items-center hover:bg-blue-100/10 mt-3 '
             onClick={signIn}>
              Sing In 
              <img src='/logInPage Data/create account icon.webp' className='h-[1rem]'/>
             </button>
             : <button onClick={toastForAllFilledMessage} type='button' className='text-white hover:text-[1.1rem]'>signIn</button>}
      </div>
    </form>
    <div className='flex justify-center relative bottom-[-0.7rem] space-x-3  '>
            <button>
              <img  src='/logInPage Data/google.webp' className='h-[2rem] duration-300 ease-out hover:h-[2.5rem]'/>
            </button>
            <button>
             <img  src='/logInPage Data/github.webp' className='h-[2rem] ease-out duration-300 hover:h-[2.5rem]'/>
            </button>
            <Link href={'signup'}  onClick={()=>toast('In SignUp Page')}  className='hover:underline'>Sign Up</Link>
        </div>
  </section>
  </>
  )
}

export default page