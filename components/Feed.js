import { SparklesIcon } from '@heroicons/react/outline'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';

import Input from './Input'
import Postr from './Postr'


export default function Feed() {
  const [posts, setPosts] = useState([]); 
  useEffect(()=> onSnapshot(query(collection(db,"posts"),orderBy("timestamp","desc")),(snapshot)=>{setPosts(snapshot.docs);})
    
  ,[]) 

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px]  2xl:min-w-[1000px] 3xl:min-w-[900px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2  sticky z-50 bg-white border-b border-gray-200 justify-between items-center">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer mx-3">Home</h2>
            <div className="hoverEffect flex justify-center items-center px-0 w-9 h-9 mx-3" >
                <SparklesIcon className='h-5 '/>
            </div>
        </div>
        <Input/>
        <AnimatePresence>

        {posts.map((post)=>(
          <motion.div key= {post.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1}}>
            <Postr key={post.id} post={post}/>
          </motion.div>
        ))}
        </AnimatePresence>

    </div>
  )
}
