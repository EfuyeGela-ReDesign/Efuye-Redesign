
const Hero = () => {
  
  return (
    <section className='custom-container flex flex-col w-full justify-between h-full mb-10 text-efuye mt-10'>
      <div className='flex justify-between'>
        <h1 className='flex-1 justify-start items-start text-8xl text-left font-thin text-shadow-sm'>Discover Our Projects</h1>
        <div className='flex-1 grid-cols-2 grid gap-12'>
          <div className='grid grid-row-2 gap-4'>
              <div className='bg-gray-200 w-[280px] h-[179px] shadow-md'></div>
              <div className='bg-gray-200 w-[280px] h-[179px] shadow-md'></div>
          </div>
          <div className='bg-gray-200 w-[232px] h-[376px] shadow-md'></div>
        </div>
      </div>
      <div className='flex gap-24 mt-10'>
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
        <span className='text-[5.125rem] font-bebas font-thin'>{props}</span>
        <span className="absolute top-[-30px] right-[-30px] text-7xl font-thin text-utility">+</span>
      </div>
      <p className="mt-2 text-slate-800 text-md">Successful Projects</p>
    </div>
  );
};



export default Hero