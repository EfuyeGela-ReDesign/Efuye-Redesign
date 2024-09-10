// import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "./ui/pagination"

const PaginationSection = ({
  setCurrentpage,
  postsPerPage,
  total
}) => {

 
  let pages:number[] = []
    for (let i = 0; i <= total.length /postsPerPage; i++ ){
      pages.push(i + 1)
    }

  const handleProgress = (id: number) =>{
    setCurrentpage(id)
  }

  const handlePrev = (e) =>{
    e.preventDefault()
    if(id > 1){
      setCurrentpage(id -= 1)
    }
  }

  const handleNext = (e) =>{
    e.preventDefault()
    setCurrentpage(id += 1)
    
  }
  return (
    <Pagination>
        <PaginationContent className='flex gap-5'>
            <PaginationItem>
              <PaginationPrevious href="#" size={undefined}  />
            </PaginationItem>
            {
              pages.map((id) =>(
                <PaginationItem>
                   <PaginationLink size={undefined} onClick={() => handleProgress(id)}>{id}</PaginationLink>
                </PaginationItem>
              ))
            }
            <PaginationItem>
            <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" size={undefined} />
            </PaginationItem>
        </PaginationContent>
    </Pagination>
  )
}
export default PaginationSection