import React from 'react'
import {useSession ,signOut} from 'next-auth/react';
import { EmojiHappyIcon,PhotographIcon } from '@heroicons/react/outline'; 
export default function Input() {
    const {data:session} = useSession(); 
    console.log("session = ",session);
  return (
    <>
    {session && ( <div className="flex p-3 space-x-3  border-b border-gray-200">
    <img onClick={signOut}src={session.user.image} alt='user image' className='h-11 w-11 rounded-full cursor-pointer hover:brightness-90'/>
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
</div>)}
</>
  )
}
