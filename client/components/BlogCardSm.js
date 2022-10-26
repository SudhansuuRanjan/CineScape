import React from 'react'
import {
    AiFillHeart,
    AiOutlineEye,
    AiOutlineComment,
    AiOutlineSave,
    AiOutlineLink
} from "react-icons/ai";
import { FiShare } from "react-icons/fi";

const BlogCardSm = () => {
    return (
        <div className='px-3 w-[100%] md:w-[27rem] lg:w-[35rem] rounded-3xl border border-gray-700 flex items-center justify-between'>
            <div className='flex flex-col  justify-center'>
                <div className='flex gap-1 py-3'>
                    <span className='px-2 py-[2px] bg-sky-200 text-sky-600 rounded-full text-sm border border-sky-600'>Comedy</span>
                    <span className='px-2 py-[2px] bg-sky-200 text-sky-600 rounded-full text-sm border border-sky-600'>Sci-fi</span>
                    <span className='px-2 py-[2px] bg-sky-200 text-sky-600 rounded-full text-sm border border-sky-600'>Space</span>
                </div>

                <div className=''>
                    <h2 className='font-semibold md:text-lg lg:text-lg text-base'>Kesariya : The definition of Love</h2>
                </div>


                <div className="flex items-center text-xs text-gray-300 py-3">
                    <img
                        src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/7yvzyzeitc8-1-200x300.jpg"
                        alt="profile"
                        className="h-8 w-8 rounded-full"
                    />
                    <p className="pl-2 font-medium text-sm">Sudhanshu</p>
                    <p className="pl-1"> &#183;</p>
                    <p className="pl-1 text-gray-400">13 Sept. 2014</p>
                </div>

                <div className="flex items-center justify-between py-3 pt-0">
                    <div className="flex">
                        <button className="bg-gray-800 px-3 py-1 rounded-full flex items-center mr-2 text-green-500">
                            {<AiOutlineEye />}
                            <p className="ml-2 text-sm">{23}</p>
                        </button>

                        <button className="bg-gray-800 px-3 py-1 rounded-full flex items-center mr-2 text-pink-600">
                            <AiFillHeart />
                            <p className="ml-2 text-sm">{7}</p>
                        </button>

                        <button className="bg-gray-800 px-3 py-1 rounded-full flex items-center mr-2 text-blue-500">
                            <AiOutlineSave />
                            <p className="ml-2 text-sm">{2}</p>
                        </button>
                    </div>

                    {/* <button onClick={() => setSharePopup(true)} className="bg-gray-800 p-3 text-lg text-gray-200 rounded-full flex items-center mr-2 ">
                        <FiShare />
                    </button> */}
                </div>

            </div>

            <div className="bg-cover h-[100%] lg:h-[10rem] md:h-[10rem] w-[10rem] rounded-xl overflow-hidden flex items-center justify-center my-3 ml-3">
                <img
                    className="hover:scale-[102%] ease-in duration-300"
                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354547-1-819x1024.jpeg"
                    alt="blog"
                />
            </div>
        </div>
    )
}

export default BlogCardSm