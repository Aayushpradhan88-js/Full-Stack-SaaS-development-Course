import React from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'


const HomePage = () => {
  return (
    < div className=' bg-black min-h-screen'>
      <NavBar />
      <div className='p-6'>
        <Card />
      </div>
    </div >
  )
}

export default HomePage