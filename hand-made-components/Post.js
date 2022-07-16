import { DotsHorizontalIcon ,ChatIcon,ChartSquareBarIcon,ShareIcon ,HeartIcon} from '@heroicons/react/outline';
// import{HeartIcon}from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';

export default function Post({post}) {
  return (
    <div className="flex border-b border-gray-200">
        <div className=' pt-2 pl-1'>
            <img src={post.userImg} alt={post.username} className="rounded-full h-11 w-11 cursor-pointer hover:brightness-90"/>
        </div>
        <div className="w-full ">
            <div className='flex  p-3 justify-between items-center'>
                <div className="flex space-x-1 w-auto ">
                  <p className="text-lg"><b>{post.name}</b></p>
                    <p className="text-lg">{post.username}</p>
                    <p className="text-lg">{post.timestamp}</p>
                    
                </div>
                {/* <div className="  w-auto rounded-full hover:bg-sky-200 "> */}
                    <DotsHorizontalIcon className='h-10 w-10 rounded-full w-auto hover:text-sky-400  hover:bg-sky-100' />
           
            </div>
            <div className="w-auto -800  mb-2">
                <p className="text-lg mx-3">{post.text}</p>
            </div>
            <div className='w-full p-1'>
                <Image src={post.img} layout="responsive" width={80} height={80}/>
            </div>
            <div className="flex justify-evenly items-center p-2">
  <ChatIcon className='h-9 text-gray-400 rounded-full p-1 hover:text-sky-400 m-2 hover:bg-sky-200'/>
<HeartIcon className='h-9 p-1 m-2 hover:text-red-400 rounded-full hover:bg-red-200 text-gray-400 '/>

<ShareIcon className='h-9 p-1 hover:bg-sky-200 rounded-full  text-gray-400  m-2 hover:text-sky-400'/>
                
                <ChartSquareBarIcon className='h-9 p-1 hover:bg-sky-200 rounded-full text-gray-400 m-2 hover:text-sky-400'/>
            </div>

        </div>
    </div >
  )
}
