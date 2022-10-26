import React from 'react'
import Title from './Title'
import BlogCardLg from './BlogCardLg'
import BlogCardSm from './BlogCardSm'

const LatestBlogs = () => {
  return (
    <div className='mt-5'>
        <Title description="Discover the most outstanding articles ins all topics of life." title="Latest Articles 🎈"/>
       <div className='mt-5 w-[100%] flex flex-col md:flex-row lg:flex-row items-center justify-between'>
         <div className='w-[90%]'>
            <BlogCardLg/>
         </div>
         <div className='w-[90%] flex flex-col items-center justify-between my-3 mx-0 md:mx-3 lg:mx-3 gap-3'>
            <BlogCardSm/>
            <BlogCardSm/>
            <BlogCardSm/>
         </div>
       </div>
    </div>
  )
}

export default LatestBlogs