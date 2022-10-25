import { useRouter } from 'next/router'
import { AiOutlineWhatsApp, AiOutlineTwitter, AiFillFacebook, AiFillInstagram} from 'react-icons/ai'
import BlogCard from '../../components/BlogCard'

const Profile = () => {

    const router = useRouter()
    const { name } = router.query

    return (
        <div className='relative'>
            <div >
                <img src="https://www.pumpkinbeer.reviews/hs-fs/hub/150890/file-1480896619-jpeg/autumn-leaves-header.jpeg?width=1600&name=autumn-leaves-header.jpeg" alt="Profile-header" />
            </div>

            <div className='m-auto flex items-center justify-center'>
                <div className='bg-[#ffffff] dark:bg-[rgb(21,32,55)] md:rounded-3xl lg:rounded-3xl p-5 lg:w-[90%] md:w-[90%] relative md:absolute lg:absolute shadow-lg flex lg:border md:border dark:border-gray-700 border-gray-200'>
                    <div className='md:flex lg:flex w-[100%] gap-4'>
                        <img className='h-[7rem] w-[7rem] md:h-[9rem] md:w-[9rem] lg:h-[9rem] lg:w-[9rem] rounded-2xl' src="https://avatars.githubusercontent.com/u/77230416?v=4" alt="profile-img" />

                        <div className='flex justify-between w-[100%] pt-4 lg:pt-0 md:pt-0'>
                            <div className='max-w-xl'>
                                <h1 className='text-2xl font-semibold'>{name}</h1>
                                <p className='text-sm dark:text-gray-300  text-gray-800 py-1'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis pariatur eum voluptates est impedit magnam quisquam modi obcaecati? Quis est assumenda in asperiores a recusandae excepturi.
                                </p>
                                <div className='flex text-2xl gap-2 pt-2'>
                                    <a href="/">
                                        <AiOutlineWhatsApp/>
                                    </a>
                                    <a href="/">
                                        <AiOutlineTwitter/>
                                    </a>
                                    <a href="/">
                                        <AiFillFacebook/>
                                    </a>
                                    <a href="/">
                                        <AiFillInstagram/>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <button className='bg-blue-500 py-[0.3rem] px-6 rounded-lg'>Follow</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='pt-[2rem] md:pt-[8rem] lg:pt-[10rem] w-[80%] md:w-[90%] lg:w-[90%] m-auto flex justify-between'>
                <div className='flex gap-2'>
                   <button className='py-1 px-3 bg-[rgb(209,74,126)] rounded-full'>Articles</button>
                   <button className='py-1 px-3 rounded-full' >Followers</button>
                </div>
                <div>
                    <select name="filter" id="filter" className='py-2 px-3 rounded-full bg-[#ffffff] dark:bg-[rgb(15,20,33)] border border-zinc-700 cursor-pointer'>
                        <option value="0">Default</option>
                        <option value="1">Most Recent</option>
                        <option value="2">Most Liked</option>
                        <option value="3">Most Viewed</option>
                    </select>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2.5 gap-y-4 sm:gap-6 2xl:gap-8 mt-8 lg:mt-10 m-auto w-[80%] md:w-[90%] lg:w-[90%]">
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
        </div>
    )
}

export default Profile