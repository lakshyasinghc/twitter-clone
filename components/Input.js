import React, { useRef } from 'react'
import {useSession ,signOut} from 'next-auth/react';
import {useState} from 'react'; 
import {db, storage}from '../firebase'; 
import { EmojiHappyIcon,PhotographIcon, XIcon } from '@heroicons/react/outline'; 
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { getDownloadURL,ref, uploadString } from 'firebase/storage';











export default function Input() {




    const {data:session} = useSession(); 

    const [input,setInput]= useState(""); 
    const [selectedFile , setSelectedFile]= useState(null); 
    const [loading , setLoading] = useState(false); 
    const filePickerRef= useRef(null); 


    const sendPost= async ()=>{
        if(loading){
            return; 
        }else{
            setLoading(true);
        }

        const docRef=await addDoc(collection(db,"posts"),{
            id:session.user.uid, 
            text:input,
            userImg:session.user.image, 
            timestamp : serverTimestamp(), 
            name:session.user.name, 
            username:session.user.username, 
        });

    const imageRef= ref(storage,`posts/${docRef.id}/image`);
            if(selectedFile){
                await uploadString(imageRef,selectedFile,"data_url").then(async()=>{
                    const downloadURL = await getDownloadURL(imageRef);
                await updateDoc(doc(db,"posts",docRef.id),{
                    image:downloadURL,
                })
                })
            }
        setInput("");
        setSelectedFile(null);
        setLoading(false); 
    }



    const addImageToPost=(e)=>{
        const reader= new FileReader(); 
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]); 
        }
        reader.onload = (readerEvent)=>{
setSelectedFile(readerEvent.target.result); 
        }
    };


  return (
    <>
    {session && ( <div className="flex p-3 space-x-3  border-b border-gray-200">
    <img onClick={signOut}src={session.user.image} alt='user image' className='h-11 w-11 rounded-full cursor-pointer hover:brightness-90'/>
    <div className="w-full divide-y divide-gray-200 ">
        <div className=''>
            <textarea rows="2" placeholder="What's happening?"
            className='w-full border-none focus:ring-0 text-lg placeholderbg-gray-700 tracking-wider min-h-[50px]
            text-gray-700' value={input} onChange ={(e)=>(setInput(e.target.value))}> </textarea>

        </div>


        {selectedFile&& (
        <div className='relative'>
            <XIcon  onClick={()=>{setSelectedFile(null)}}className='h-5 text-black absolute cursor-pointer shadow-md rounded-full'/>
            <img src={selectedFile} className={`${loading&&"animate-pulse"}`}/>
        </div>)}




    <div className="flex justify-between items-center pt-2.5"> 

            {!loading && (
<>



<div className="flex">
    <div className="" onClick={()=>filePickerRef.current.click()}>   
    <PhotographIcon  className='h-10 w-10 hoverEffect p-2 hover:bg-sky-100 text-sky-500'/>
    <input type="file" hidden ref={filePickerRef} onChange={addImageToPost}/>
    </div>
<EmojiHappyIcon className='h-10 w-10 hoverEffect p-2 hover:bg-sky-100 text-sky-500'/>

</div>
<button onClick={sendPost} disabled={!input.trim()} className={`bg-sky-400 font-bold shadow-md hover:brightness-90 rounded-full px-4 py-1.5 text-gray-200 disabled:opacity-50 `}
>Tweet</button>
</>



)}
        </div>

    </div>
</div>)}
</>
  )
}
// 37:26