import Image from "next/image"
export default function SkillsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className="text-white"><div className='text-center  text-white text-[2rem] underline underline-offset-[3px]  decoration-1'>
   <div className='items-center flex text-center justify-content-center text-[1rem]'>
       <div className='m-auto '><Image
        src='/skill.png'
        alt='skill logo'
        height={75}
        width={75}/></div> 
      </div>
  </div>{children}</section>
  }