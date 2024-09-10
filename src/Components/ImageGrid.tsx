import React from 'react'
import { Card } from './ui/card'
// import { Button } from './ui/button'
import { Link } from 'react-router-dom'



const ImageGrid = ({image}) => {
  return (
    <div className='custom-container container grid grid-cols-3 gap-5 border-none'>
        {
          image.map((item: { image: string | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) =>(
            <Card className='border-none'>
              <img src={item.image} alt='' width={320}  className='object-cover h-[21.5rem] w-[24.313rem] rounded shadow-lg'/>
              <div className='flex flex-col justify-start items-center p-4 border-none'>
                <h1 style={{
                  textTransform:'capitalize'
                }} className='text-left w-full text-4xl'>{item.title}</h1>
                <p className='text-left'>
                  {item.description}
                </p>
                <Link to={`/${item.id}`} className='text-yellow-500 bg-transparent text-left w-full p-0'>
                    READ MORE
                </Link>
              </div>
            </Card>
          )
        ) 
        }
    </div>
  )
}

export default ImageGrid