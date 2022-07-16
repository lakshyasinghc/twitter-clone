import { ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon ,ChartSquareBarIcon} from '@heroicons/react/outline'
import React from 'react'

export default function Postr({post}) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
        {/* user image */}
        <img  className="h-11 w-11 rounded-full mr-4"src={post.userImg} alt="user-img"/>
        {/* right side */}
        <div className="">
            {/* Header */}
            <div className='flex justify-between items-center'>
                {/* user info */}
                <div className="flex space-x-1 items-center whitespace-nowrap">
                    <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
                    <span className="text-sm sm:text-[15px]">{post.username}</span>
                    <span className="text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>
                </div>
                {/* dot icon */}
                <DotsHorizontalIcon className='h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2' />
            </div>
            {/* post text */}
            <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2 ">{post.text}</p>
            {/* post image */}
            <img src={post.img} alt="" className='rounded-2xl mr-2 '/>
            {/* icons */}
            <div className="flex justify-evenly text-gray-500 p-2 ">
                <ChatIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-200 '/>
                <TrashIcon className='h-9 w-9 hoverEffect p-2 hover:text-red-500 hover:bg-red-200'/>
                <HeartIcon className='h-9 w-9 hoverEffect p-2 hover:text-red-500 hover:bg-red-200'/>
                <ShareIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-200'/>
                <ChartSquareBarIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-200'/>


                
            </div>
        </div>
    </div>
  )
}
