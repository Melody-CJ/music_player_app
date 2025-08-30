import React from 'react'
import { assets, songsData } from '../assets/assets'

const MusicPlayer = () => {
  return (
    <div className='bg-black p-4 text-white rounded-md flex flex-col'>
      
      <div className='flex items-center gap-4 mb-4'>
        <img className='w-16 h-16 object-cover rounded' src={songsData[0].image} alt='Music image'/>
        <div>
          <p className='font-semibold'>{songsData[0].name}</p>
          <p className='text-sm text-gray-400'>{songsData[0].desc.slice(0,25)}</p>
        </div>
      </div>
      
      
      <div className='flex flex-col items-center'>
       
        <div className='flex gap-6 mb-4'>
          <img className='w-5 cursor-pointer opacity-70 hover:opacity-100' src={assets.shuffle_icon} alt='Shuffle'/>
          <img className='w-5 cursor-pointer opacity-70 hover:opacity-100' src={assets.rewind_icon} alt='Previous'/>
          <img className='w-8 cursor-pointer opacity-70 hover:opacity-100' src={assets.play_icon} alt='Play'/>
          <img className='w-5 cursor-pointer opacity-70 hover:opacity-100' src={assets.forward_icon} alt='Next'/>
          <img className='w-5 cursor-pointer opacity-70 hover:opacity-100' src={assets.loop_icon} alt='Loop'/>
        </div>
        
       
        <div className='flex items-center gap-4 w-full max-w-md'>
          <p className='text-xs text-gray-400 w-8'>0:56</p>
          <div className='flex-1 h-1 bg-gray-700 rounded-full cursor-pointer'>
            <div className='h-full w-0/4 bg-purple-600 rounded-full'></div>
          </div>
          <p className='text-xs text-gray-400 w-8'>3:44</p>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer