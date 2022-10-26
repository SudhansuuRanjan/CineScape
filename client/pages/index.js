import Head from 'next/head'
import Image from 'next/image'
import LatestBlogs from '../components/LatestBlogs'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <div className='w-[100%] md:w-[80%] lg:w-[80%] m-[auto]'>
       <div className="container">
         <Slider/>
         <LatestBlogs/>
       </div>
    </div>
  )
}
