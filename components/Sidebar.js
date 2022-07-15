import React from 'react'; 

import {HomeIcon,HashtagIcon,BellIcon,InboxIcon,BookmarkAltIcon,ClipboardListIcon,UserIcon,DotsCircleHorizontalIcon, DotsHorizontalIcon} from '@heroicons/react/outline'; 
import Image from 'next/image';
import SidebarMenuItem from './SidebarMenuItem';
export default function Sidebar() {
  return (
    <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full'>
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
            <SidebarMenuItem Icon={BellIcon} text="Notifications"/>
            <SidebarMenuItem Icon={InboxIcon} text="Messages"/>
            <SidebarMenuItem Icon={BookmarkAltIcon} text="Bookmarks"/>
            <SidebarMenuItem Icon={ClipboardListIcon} text="Lists"/>
            <SidebarMenuItem Icon={UserIcon} text="Profile"/>
            <SidebarMenuItem Icon={DotsCircleHorizontalIcon} text="More"/>

        </div>
        {/* Button */}

<button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-lg hover:bg-blue-600 text-lg hidden xl:inline">Tweet</button>
        {/* Mini-Profile */}
        <div className='hoverEffect text-gray-700 flex items-center justify-scenter xl:justify-start mt-auto'>
            <img  className="h-10 w-10 rounded-full xl:mr-2" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zvce1RSBjdzN_UZHZiJzXQHaHa%26pid%3DApi&f=1'/>
            <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold">Lakshya Singh Chouhan</h4>
                <p className="text-gray-500">@lakshyasinghc11</p>
            </div>
            <DotsHorizontalIcon className='h-5 hidden xl:inline xl:ml-8' />
        </div>
    </div>
  )
}

