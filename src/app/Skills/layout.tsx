export default function SkillsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className="text-white"><div className='text-center  text-white text-[2rem] underline underline-offset-[3px]  decoration-1'>
    Skills
  </div>{children}</section>
  }