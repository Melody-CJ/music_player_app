import React from 'react'
import { assets } from '../assets/assets'

const NavBar = () => {
  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img className='w-20 p-2' src={assets.muse_icon} alt='Logo'/>
            </div>
      </div>
    </>
  )
}

export default NavBar
