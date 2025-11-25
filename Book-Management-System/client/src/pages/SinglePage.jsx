import React from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const SinglePage = () => {
  return (
    <div className='bg-black min-h-screen'>
      <NavBar />
      <Link to="/">
        <div className='mt-4 ml-2'>
          <Button title="Back to home" />
        </div>
      </Link>
      <div className='mt-5 ml-150'>
        <Card />
        <div className='mt-3 flex gap-x-2 ml-60'>
          <Link to="/edit">
            <div className='bg-green-400 flex rounded-lg dark:hover:bg-green-700 dark:focus:ring-green-900 '>
              <Button title="edit" />
            </div>
          </Link>
          <div className='bg-red-600 flex rounded-lg dark:focus:ring-red-800 dark:hover:bg-red-700'>
           <Button title="delete" /> 
          </div>

        </div>
      </div>
    </div>
  )
}

export default SinglePage