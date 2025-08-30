import React from 'react'
import SideBar from './components/SideBar'

const App = () => {
  return (
    <>
      <div className='h-screen bg-black flex'>
        <SideBar />
          <div className='flex-1 bg-gray-900 text-white p-4'>
          </div>
      </div>
    </>
  )
}

export default App

