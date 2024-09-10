import React from 'react'
import { Card } from './ui/card'
// import { Button } from './ui/button'
import { Link } from 'react-router-dom'



const ImageGrid = ({image}) => {
  return (
    <div className='custom-container grid grid-cols-3 gap-6 border-none'>
        {
          image.map((item: { image: string | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) =>(
            <Card className='border-none shadow-none'>
              <img src={item.image} alt='' className='object-cover h-[21.5rem] w-[25rem] rounded shadow-lg'/>
              <div className='flex flex-col justify-start items-center border-none w-full gap-2'>
                <h1 style={{
                  textTransform:'capitalize'
                }} className='text-left w-full pt-6 pb-2 text-4xl'>{item.title}</h1>
                <p className='text-left w-full'>
                  {item.description}
                </p>
                <Link to={`/${item.id}`} className='text-readmore bg-transparent text-left w-full'>
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