import ImageGrid from './ImageGrid'
import { useState,useEffect } from 'react';
import PaginationSection from './PaginationSection';
const Projects = () => {
  const [image, setImage] = useState([]);
  const [currentPage, setCurrentpage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(9);
  const [currentPosts, setCurrentPosts] = useState(image.slice(0,9))

 
  useEffect(() =>{
     fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => setImage(data))
  },[])

  let lastPostIndex = currentPage * postsPerPage;
  let firstPostIndex = lastPostIndex - postsPerPage;
  
 
  useEffect(() =>{
    setCurrentPosts(image.slice(firstPostIndex, lastPostIndex));
  },[currentPosts,currentPage])
  
  
  return (
    <section className='custom-container flex flex-col gap-2'>
      <div className='flex gap-2 items-center justify-center mb-10'>
          <p>GAME THINKING</p>
          <div  className='border-yellow-600 border-solid h-[1.25rem] border-[0.075rem]'></div>
          <p>COMMUNITY DEVELOPMENT</p>
          <div className='border-yellow-600 border-solid h-[1.25rem] border-[0.075rem]'></div>
          <p>PRODUCTS AND SERVICE</p>
      </div>
      { Object.keys(image).length !== 0 ? (<ImageGrid image={currentPosts}/>) : (<div>Loading...</div>)}

      <PaginationSection 
          setCurrentpage={setCurrentpage} 
          postsPerPage={postsPerPage}  
          total={image}
          />
    </section>
  )
}

export default Projects