import React from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'


const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className='flex flex-wrap'>

        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default HomePage