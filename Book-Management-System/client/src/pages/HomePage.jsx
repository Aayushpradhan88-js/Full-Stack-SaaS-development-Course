import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import axios from 'axios'

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/books/')
        console.log("all books value - 1", response) 
        setBooks(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchAllBooks();
  }, []);

  console.log("all books value - 2",books)

  if (loading) {
    return (
      <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
        <span className="sr-only">Loading...</span>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
        <div className="h-8 w-8 bg-black rounded-full animate-bounce" />
      </div>
    )
  }

  //error message
  if (error) {
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div>
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                  {error}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    There was an error processing your request.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <button className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm" onclick="closeModal()">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className=' bg-white min-h-screen'>
      <NavBar />
      <div className='p-6  flex gap-4'>
        {books.map((book) => {
          return(
            <Card 
            book={book}
            />
          )
        })}
      </div>
    </div >
  )
}

export default HomePage