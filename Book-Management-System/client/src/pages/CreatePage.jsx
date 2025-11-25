import React from 'react'
import NavBar from '../components/NavBar'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const CreatePage = () => {
  return (
    <div className=" bg-black min-h-screen">
      <NavBar />

  
      <Link to="/">
        <div className='mt-4  ml-3'>
          <Button title="Back to home" />
        </div>
      </Link>

      <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
          Create Book
        </div>
        <form className="py-4 px-6" action method="POST">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Book Author
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookauthor" type="text" placeholder="Maharishi Ved Vyasa" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Book Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookname" type="text" placeholder="Bhagwat Geeta" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Book Price
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookprice" type="text" placeholder="1000" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Book Generic
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookgeneric" type="text" placeholder="Hinduism" />
          </div>
          <div className="flex items-center justify-center mb-4">
            <button className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline" type="submit">
              create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePage