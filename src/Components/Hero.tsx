import React from 'react'

const Hero = () => {
  
  return (
    <section className='custom-container flex flex-col w-full justify-between h-full mb-10'>
      <div className='flex'>
        <h1 className='flex justify-start items-start text-8xl text-left font-bold text-slate-800 text-shadow-lg'>Discover Our Projects</h1>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-4'>
            <div className='bg-gray-200 w-[312px] h-[179px] shadow-md'></div>
            <div className='bg-gray-200 w-[312px] h-[179px] shadow-md'></div>
          </div>
          <div className='bg-gray-200 w-[232px] h-[376px] shadow-md'></div>
        </div>
      </div>
      <div className='flex gap-12'>
        <SuccessProjects props={900}/>
        <SuccessProjects props={300}/>
        <SuccessProjects props={500}/>
      </div>
    </section>
  )
}


const SuccessProjects = ({props}) => {
  return (
    <div className="flex flex-col items-center mt-6">
      <div className="relative text-5xl font-bold">
        <span className='text-[4.75rem] font-bebas'>{props}</span>
        <span className="absolute top-[-30px] right-[-35px] text-7xl text-yellow-500">+</span>
      </div>
      <p className="mt-2 text-slate-800 text-md">Successful Projects</p>
    </div>
  );
};



export default Hero