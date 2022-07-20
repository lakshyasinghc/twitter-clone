import { ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon ,ChartSquareBarIcon} from '@heroicons/react/outline';
import React, {useEffect, useState} from 'react';
import Moment from 'react-moment';
import {collection, deleteDoc, doc, onSnapshot, setDoc}from "firebase/firestore"; 
import {db} from "../firebase";
import { useSession } from "next-auth/react";
import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid";
import { useRouter } from 'next/router';

export default function Postr({post}) {
    const router= useRouter(); 
    const {data:session} = useSession(); 
    const [likes,setLikes]= useState([]); 
    const [hasLiked,setHasLiked]= useState(false); 

    useEffect(()=>{
        const unsubscribe= onSnapshot(
            collection(db,"posts",post.id,"likes"),(snapshot)=>setLikes(snapshot.docs)
        );

    },[db])

    useEffect(()=>{
            setHasLiked(likes.findIndex((like)=>like.id===session?.user?.uid)!==-1);
        },[likes]);

    async function likePost(){
        if(session){

            if(hasLiked){
                 await deleteDoc(doc(db,"posts",post.id,"likes",session?.user?.uid));
            }else{
    
                await setDoc(doc(db,"posts",post.id,"likes",session?.user?.uid),{
                    username:session?.user?.username,
                })
            }
        }else{
           router.push("/auth/signin");
        }
    }
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
        {/* user image */}
        <img  className="h-11 w-11 rounded-full mr-4"src={post.data().userImg} alt="user-img"/>
        {/* right side */}
        <div className="">
            {/* Header */}
            <div className='flex justify-between items-center'>
                {/* user info */}
                <div className="flex space-x-1 items-center whitespace-nowrap">
                    <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.data().name}</h4>
                    <span className="text-sm sm:text-[15px]">@{post.data().username}</span>
                    <span className="text-sm sm:text-[15px] hover:underline"><Moment fromNow>{post?.data().timestamp?.toDate()}</Moment></span>
                </div>
                {/* dot icon */}
                <DotsHorizontalIcon className='h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2' />
            </div>
            {/* post text */}
            <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2 ">{post.data().text}</p>
            {/* post image */}
            <img src={post.data().image} alt="" className='rounded-2xl w- mr-2 '/>
            {/* icons */}
            <div className="flex justify-evenly text-gray-500 p-2 ">
                <ChatIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-200 '/>
                <TrashIcon className='h-9 w-9 hoverEffect p-2 hover:text-red-500 hover:bg-red-200'/>
              
              <div className="flex items-center ">

              {hasLiked?(
                <HeartIconFilled  onClick={likePost} className='h-9 w-9 hoverEffect p-2 text-red-500 hover:bg-red-200'/>
                ):(

                <HeartIcon  onClick={likePost} className='h-9 w-9 hoverEffect p-2 hover:text-red-500 hover:bg-red-200'/>
                )}
               {
                likes.length>0 && (
                    <span className={`${hasLiked&& "text-red-600 "} text-sm select-none`}> {likes.length}</span>
                )
               }
              </div>


                <ShareIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-200'/>
                <ChartSquareBarIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-200'/>


                
            </div>
        </div>
    </div>
  )
}
