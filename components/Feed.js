import { SparklesIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Feed() {
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2  sticky z-50 bg-white border-b border-gray-200 justify-between items-center">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer mx-3">Home</h2>
            <div className="hoverEffect flex justify-center items-center px-0 w-9 h-9 mx-3" >
                <SparklesIcon className='h-5 '/>
            </div>
        </div>
    </div>
  )
}