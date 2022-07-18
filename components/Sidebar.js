import React from 'react'; 
import { useRouter } from 'next/router';
import {HomeIcon,HashtagIcon,BellIcon,InboxIcon,BookmarkAltIcon,ClipboardListIcon,UserIcon,DotsCircleHorizontalIcon, DotsHorizontalIcon} from '@heroicons/react/outline'; 
import Image from 'next/image';
import SidebarMenuItem from './SidebarMenuItem';

import { useSession,signOut } from 'next-auth/react';
export default function Sidebar() {
  const {data:session}= useSession(); 
  const router= useRouter(); 

  return (
    <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24'>
        {/* Twitter Logo */}
        <div className="hoverEffect p-0 hover:bg-blue-100  xl:px-1" >
        <Image
          width="50"
          height="50"
          className=""
    src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        ></Image>
        </div>
        {/* Menu */}
        <div className="mt-4 mb-2.5 xl:items-start">
            <SidebarMenuItem Icon={HomeIcon} active text="Home"/>
            <SidebarMenuItem Icon={HashtagIcon} text="Explore"/>
            {session&& (
              <>
            <SidebarMenuItem Icon={BellIcon} text="Notifications"/>
            <SidebarMenuItem Icon={InboxIcon} text="Messages"/>
            <SidebarMenuItem Icon={BookmarkAltIcon} text="Bookmarks"/>
            <SidebarMenuItem Icon={ClipboardListIcon} text="Lists"/>
            <SidebarMenuItem Icon={UserIcon} text="Profile"/>
            <SidebarMenuItem Icon={DotsCircleHorizontalIcon} text="More"/>
            </>
            )}

        </div>
        {/* Button */}
          {session?(
<>
<button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-lg hover:bg-blue-600 text-lg hidden xl:inline">Tweet</button>
        <div className='hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto'>
            <img  onClick={signOut}className="h-10 w-10 rounded-full xl:mr-2" src={session.user.image}/>
            <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold">{session.user.name}</h4>
                <p className="text-gray-500">@{session.user.username}</p>
            </div>
            <DotsHorizontalIcon className='h-5 hidden xl:inline xl:ml-8' />
        </div>
        </>
          ):(<button onClick={()=>{router.push('/auth/signin')}} className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-lg hover:bg-blue-600 text-lg hidden xl:inline ">
            Sign in
          </button>)}
        {/* Mini-Profile */}
    </div>
  )
}

