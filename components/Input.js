import React from 'react'
import { EmojiHappyIcon,PhotographIcon } from '@heroicons/react/outline'; 
export default function Input() {
  return (
    <div className="flex p-3 space-x-3  border-b border-gray-200">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zvce1RSBjdzN_UZHZiJzXQHaHa%26pid%3DApi&f=1" alt='user image' className='h-11 w-11 rounded-full cursor-pointer hover:brightness-90'/>
        <div className="w-full divide-y divide-gray-200 ">
            <div className=''>
                <textarea rows="2" placeholder="What's happening?"
                className='w-full border-none focus:ring-0 text-lg placeholderbg-gray-700 tracking-wider min-h-[50px]
                text-gray-700' /> 
            </div>
        <div className="flex justify-between items-center pt-2.5"> 
            <div className="flex">
                <PhotographIcon className='h-10 w-10 hoverEffect p-2 hover:bg-sky-100 text-sky-500'/>
            <EmojiHappyIcon className='h-10 w-10 hoverEffect p-2 hover:bg-sky-100 text-sky-500'/>

            </div>
            <button className="bg-sky-400 font-bold shadow-md hover:brightness-90 rounded-full px-4 py-1.5 text-gray-200 disabled:opacity-50
            ">Tweet</button>
            
            </div>
        </div>
    </div>
  )
}
