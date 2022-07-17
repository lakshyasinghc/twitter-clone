import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import News from './News';
import { useState } from 'react';;

export default function Widgets({newsResults}) {
    const [articleNumber,changeArticleNumber]= useState(3); 
    function click(){
        changeArticleNumber(articleNumber+3); 
    }
  return (
    <div className="xl:w-[600px] ml-8 hidden space-y-5 lg:inline">
        <div className='w-[90%] xl:w-[75%] sticky bg-white py-1.5 top-0 z-50'>
            <div className='flex items-center p-3 rounded-full relative '>
                <SearchIcon className='h-5 z-50 text-gray-500'/>
                <input type="text" placeholder='Search Twitter' className=' absolute inset-0 rounded-full  pl-11 border-gray-500 text-gray-700 focus:shadow-lg bg-gray-100 focus:bg-white'/>
            </div> 
        </div>
        <div className='text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]'>
            <h4 className='font-bold text-xl px-4 '>
                What's happening
                </h4>
        {newsResults.slice(0,articleNumber).map((article)=>(
            <News key={article.title} article={article} />
        ))}
        <button onClick={click} className="text-blue-300 pl-4 pb-3 hover:text-blue-400  ">Show more</button>
           
        </div>
    </div>
  )
}
  