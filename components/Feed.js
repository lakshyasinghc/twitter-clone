import { SparklesIcon } from '@heroicons/react/outline'
import React from 'react'
import Post from '../hand-made-components/Post'
import Input from './Input'
import Postr from './Postr'

export default function Feed() {
  const posts= [
    {
      id:"1",
      name:"Lakshya", 
      username:"@lakshya", 
      userImg:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zvce1RSBjdzN_UZHZiJzXQHaHa%26pid%3DApi&f=1",
      img:"https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text:"nice view!",
      timestamp:"2 hours ago"
    },
    {
      id:"2",
      name:"Lakshya", 
      username:"@lakshya", 
      userImg:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zvce1RSBjdzN_UZHZiJzXQHaHa%26pid%3DApi&f=1",
      img:"https://images.unsplash.com/photo-1657926604694-94c56fc4a8bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      text:"yupee",
      timestamp:"2 days ago"
    }
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2  sticky z-50 bg-white border-b border-gray-200 justify-between items-center">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer mx-3">Home</h2>
            <div className="hoverEffect flex justify-center items-center px-0 w-9 h-9 mx-3" >
                <SparklesIcon className='h-5 '/>
            </div>
        </div>
        <Input/>
        {posts.map((post)=>(
          <Postr key={post.id} post={post}/>
        ))}

    </div>
  )
}
