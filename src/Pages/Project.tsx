import Footer from '../Components/Footer'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
const Project = () => {
    const [render , setRender] = useState([])
    const id = useParams()

    useEffect(() =>{
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => setRender(data.find((item) => +item.id === +id.id)))
    },[])


  return (
   
    <section>
        <div className='w-full'>
            <img src={render.image} alt='' className='w-full h-[450px] object-cover'/>
        </div>

        <div className='flex gap-2 items-center justify-center p-12'>
            <div className='flex-1'>
                <h1 className='text-yellow-400 text-5xl w-[350px]'>{render.title}</h1>
                <p>{render.date}</p>
            </div>
            <div className='flex-1'>
                <p>{render.description} </p>
            </div>
        </div>



        <div className='custom-container flex gap-10'>
            <h1 className='text-5xl'>PROBLEM</h1>
            <p className='text-left'>{render.problem}</p>
        </div>



        <div className='flex items-center justify-center gap-2 mb-10'>
            <img src={render.image} alt="" className='w-[430px] h-[278px]' />
            <img src={render.image} alt="" className='w-[430px] h-[278px]'/>
            <img src={render.image} alt="" className='w-[430px] h-[278px]' />
        </div>


        <div className='custom-container flex gap-10'>
            <h1 className='text-5xl text-right'>TARGET AUDIENCE</h1>
            <p className='text-left'>{render.target}</p>
        </div>


        <div className='custom-container flex gap-10'>
            <h1 className='text-5xl text-right'>SOLUTION</h1>
            <p className='text-left'>{render.solution}</p>
        </div>

        <div className='flex items-center justify-center gap-2 mb-10'>
            <img src= {render.image} alt="" className='w-[430px] h-[278px]' />
            <img src= {render.image} alt="" className='w-[430px] h-[278px]'/>
            <img src= {render.image} alt="" className='w-[430px] h-[278px]' />
        </div>


        <div className='custom-container flex gap-10'>
            <h1 className='text-5xl text-right'>IMPACT</h1>
            <p className='text-left'>{render.impact}</p>
        </div>


        <div className='flex items-center justify-center gap-2 mb-10'>
            <img src={render.image} alt="" className='w-[430px] h-[278px]' />
            <img src={render.image} alt="" className='w-[430px] h-[278px]'/>
            <img src={render.image} alt="" className='w-[430px] h-[278px]' />
        </div>


        <Footer />
    </section>
  )
}

export default Project