import React from 'react'
import SideBar from './components/SideBar'
import Home from './components/Home'

const App = () => {
  return (
    <>
      <div className='h-screen bg-black flex'>
        <SideBar />
        <Home />
          <div className='flex-1 bg-gray-900 text-white p-4'>
          </div>

      </div>
    </>
  )
}

export default App

