import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeMain from './HomeMain'

const Home = () => {
  return (
    <div className='w-[100%] m-2 px-6 pt-4 rounded text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<HomeMain/>}/>
      </Routes>
    </div>
  )
}

export default Home
