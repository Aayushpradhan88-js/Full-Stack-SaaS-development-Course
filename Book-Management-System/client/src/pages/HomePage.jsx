import React from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'


const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className='flex flex-wrap justify-center gap-6 p-6 bg-black'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default HomePage