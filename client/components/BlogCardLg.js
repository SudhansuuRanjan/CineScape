import { useState } from "react";
import {
    AiFillHeart,
    AiOutlineEye,
    AiOutlineComment,
    AiOutlineSave,
    AiOutlineLink
} from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { RiWhatsappFill } from 'react-icons/ri'
import { FaFacebook, FaTelegramPlane, FaTwitter } from 'react-icons/fa'

const BlogCard = () => {

    const [sharePopup, setSharePopup] = useState(false);

    return (
        <div className="overflow-hidden min-w-[100%] md:min-w-[18rem] lg:min-w-[18rem]  bg-[#ffffff] dark:bg-[rgb(21,29,47)] border border-gray-700 rounded-3xl my-3 relative">
            <div className="bg-cover h-[20rem] min-w-[18rem] overflow-hidden flex items-center justify-center">
                <img
                    className="hover:scale-[102%] ease-in duration-300"
                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-7354547-1-819x1024.jpeg"
                    alt="blog"
                />
            </div>

            <div className='flex gap-1 p-3'>
                    <span className='px-2 py-[2px] bg-sky-200 text-sky-600 rounded-full text-sm border border-sky-600'>Comedy</span>
                    <span className='px-2 py-[2px] bg-sky-200 text-sky-600 rounded-full text-sm border border-sky-600'>Sci-fi</span>
                    <span className='px-2 py-[2px] bg-sky-200 text-sky-600 rounded-full text-sm border border-sky-600'>Space</span>
            </div>

            <div className="p-3 pt-0 ">
                <h1 className="text-lg font-semibold">Lorem ipsum dolor sit amet ipsum amet loreum.</h1>
                <p className="text-sm text-gray-300 pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate alias dolorem sunt facere perferendis hic! Temporibus eveniet veritatis explicabo dolore nihil, reiciendis sed aliquam?</p>
            </div>

            <div className="flex items-center text-xs text-gray-300 p-3">
                <img
                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/7yvzyzeitc8-1-200x300.jpg"
                    alt="profile"
                    className="h-8 w-8 rounded-full"
                />
                <p className="pl-2 font-medium text-sm">Sudhanshu</p>
                <p className="pl-1"> &#183;</p>
                <p className="pl-1 text-gray-400">13 Sept. 2014</p>
            </div>

            <div className="flex items-center justify-between p-3 pt-0">
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

                <button onClick={() => setSharePopup(true)} className="bg-gray-800 p-3 text-lg text-gray-200 rounded-full flex items-center mr-2 ">
                    <FiShare />
                </button>
            </div>


            {
                sharePopup && <div className="p-1 py-3 bg-[#ffffff] shadow-md border border-gray-700 dark:bg-[rgb(20,29,47)] absolute rounded-2xl bottom-1 right-1 flex flex-col gap-2">

                    <button onClick={() => setSharePopup(false)} className="flex items-center gap-3 hover:bg-[rgb(39,84,189)] cursor-pointer rounded px-5 py-1 pr-10">
                        <div><AiOutlineLink /></div>
                        <p>Copy Link</p>
                    </button>
                    <div className="h-[0.1rem] w-[100%] bg-gray-800">

                    </div>
                    <button onClick={() => setSharePopup(false)} className="flex items-center gap-3 hover:bg-[rgb(39,84,189)] cursor-pointer rounded px-5 py-1 pr-10">
                        <div><FaFacebook /></div>
                        <p>Facebook</p>
                    </button>
                    <button onClick={() => setSharePopup(false)} className="flex items-center gap-3 hover:bg-[rgb(39,84,189)] cursor-pointer rounded px-5 py-1 pr-10">
                        <div><FaTwitter /></div>
                        <p>Twitter</p>
                    </button>
                    <button onClick={() => setSharePopup(false)} className="flex items-center gap-3 hover:bg-[rgb(39,84,189)] cursor-pointer rounded px-5 py-1 pr-10">
                        <div><FaTelegramPlane /></div>
                        <p>Telegram</p>
                    </button>
                    <button onClick={() => setSharePopup(false)} className="flex items-center gap-3 hover:bg-[rgb(39,84,189)] cursor-pointer rounded px-5 py-1 pr-10">
                        <div><RiWhatsappFill /></div>
                        <p>WhatsApp</p>
                    </button>
                </div>
            }
        </div>
    );
};

export default BlogCard;
