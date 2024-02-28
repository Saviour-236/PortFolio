import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

function dashboard() {
  return (<>
  <section>
  <Toaster/>  
    <div className='text-white'>
      yourName :
      your e mail :
      your role
    </div>
  </section>
  </>
  )
}

export default dashboard