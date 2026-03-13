import React from 'react'
import Home from '../components/Home'

const Page1 = () => {
  return (
    <div id='home' className="h-screen px-5 bg-cover bg-[url(./assets/images/ujju.jpeg)] shadow-2xl">
      <div className='flex align-middle'>
        <Home />
      </div>
    </div>
  )
}

export default Page1
