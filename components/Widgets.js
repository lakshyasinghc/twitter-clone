import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import News from './News';
import { useState } from 'react';;

export default function Widgets({newsResults,randomUsersResults}) {
    const [articleNumber,changeArticleNumber]= useState(3); 
    function click(){
        changeArticleNumber(articleNumber+3); 
    }
    const [userNumber, changeUserNumber] = useState(3); 
    
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
        <div className='sticky top-16 text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%]'>
            <h4 className="font-bold text-xl px-4 ">
                Who to follow
            </h4>
            {randomUsersResults.slice(0,userNumber).map((randomUser)=>(
                <div key={randomUser.login.username}  className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
                    <img className=" rounded-full" width="40" src={randomUser.picture.thumbnail} alt="userImage"/>
                   <div  className="truncate ml-4 leading-5">
                    <h4 className='font-bold hover:underline text-[15px] truncate '>{randomUser.login.username}</h4>              
                    <h5 className="text-[13px] text-gray-500 truncate">{randomUser.name.first+ " " + randomUser.name.last}</h5>
                    </div>
                    <button className="ml-auto bg-black rounded-full text-white text-sm px-3.5 py-1.5 font-bold">Follow</button>
                </div>
            ))}
            <button onClick={()=>{changeUserNumber(userNumber+3)}} className="text-blue-300 pl-4 pb-3 hover:text-blue-400 ">
                Show more
            </button>
        </div>
    </div>
  )
}
  