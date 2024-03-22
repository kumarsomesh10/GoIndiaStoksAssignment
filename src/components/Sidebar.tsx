'use client'

import React, { useState } from 'react';
import { BiComment, BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { FaBell } from 'react-icons/fa';
import { HiCurrencyDollar } from 'react-icons/hi';

type Props = {};

export default function Sidebar({}: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  function Menu() {
    return (
        <div className="bg-blue-900 text-white flex flex-col justify-between h-screen w-80">

        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <img src="https://i.imgur.com/bUo32iq.png" alt="User Avatar" className="h-8 w-8 rounded-full mr-3" />
            <span className="mr-3">Hello User</span>
            <span className="h-8 w-8 rounded-full mr-3 p-1"><FaBell /></span>
          </div>
          <hr className="border border-white-300 h-px my-4" />
  
          <div className="sidebar-menu">
            <div className="flex items-center p-2 space-x-2 cursor-pointer" onClick={toggleSidebar}><BiComment /><span>Discussion Fourem</span></div>
            <div className="flex items-center p-2 space-x-2 cursor-pointer" onClick={toggleSidebar}><HiCurrencyDollar /><span>Market Stories</span></div>
            <div className="p-2 ml-5 cursor-pointer" onClick={toggleSidebar}>Sentiment</div>
            <div className="p-2 ml-5 cursor-pointer" onClick={toggleSidebar}>Market</div>
            <div className="p-2 ml-5 cursor-pointer" onClick={toggleSidebar}>Sector</div>
            <div className="p-2 ml-5 cursor-pointer" onClick={toggleSidebar}>Watchlist</div>
            <div className="p-2 ml-5 cursor-pointer" onClick={toggleSidebar}>Events</div>
            <div className="p-2 ml-5 cursor-pointer" onClick={toggleSidebar}>News/Interviews</div>
           </div>

        </div>
      </div>
    );
}

  return (
    <div className="flex flex-row">
      <div className={`top-0 left-0  bg-blue-900 text-white flex flex-col gap-3 ${isSidebarOpen ? '' : 'hidden'}`}>
      {isSidebarOpen && <Menu />}
      </div>
      <div className={`fixed top-[40vh]  bg-gray-200 flex flex-col justify-center ${isSidebarOpen ? 'ml-80' : ''}`}>
        <button className="bg-blue-900 h-20 text-white" onClick={toggleSidebar}>
          {isSidebarOpen ? <BiSolidLeftArrow /> : <BiSolidRightArrow />}
        </button>
      </div>
    </div>
  );
}

