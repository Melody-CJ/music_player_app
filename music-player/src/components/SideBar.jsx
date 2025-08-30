import React from 'react'
import { assets } from '../assets/assets'


const SideBar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white bg-[#121212] hidden lg:flex'>
      <div className=' h-[15%] rounded flex flex-col justify-around'>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img src={assets.home_icon} alt="Home Icon" className='w-6'/>
            <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img src={assets.search_icon} alt="Search Icon" className='w-6'/>
            <p className='font-bold'>Search</p>
        </div>
      </div>
      <div className='bg-[#121212] h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-centre gap-3'>
            <img className='w-8' src={assets.stack_icon} alt='Stack Icon'/>
            <p className='font-semibold'>Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.right_arrow} alt='Right Arrow'/>
            <img className='w-5' src={assets.plus_icon} alt='Plus Icon'/>
          </div>
        </div>
        <div className='bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
          <h1 className='pt-4'>Create your first Playlist</h1>
          <p className='font-light'>Need help?</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 mb-4'>Create Playlist</button>
        </div>
      </div>
    </div>
  )
}

export default SideBar
