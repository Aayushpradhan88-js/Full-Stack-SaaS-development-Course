import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Button from '../components/Button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const SinglePage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookWithId = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/books/${id}`);
        setBook(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchBookWithId();
  }, [id]);


  const deleteBookWithId = async () => {
    const response = await axios.delete(`http://localhost:3000/api/books/${id}`);
    if(response.status === 200){
      navigate("/");
      alert("book deleted successfully");
      setLoading(false);
    } else {
      alert("unable to delete")
      setLoading(false);
    }
  }

  //loading animation
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
            <div className="absolute inset-0 bg-gray-500 opacity-75">
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                  <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M6 18L18 6M6 6l12 12" />
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
      </div>

    )
  }

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-md w-full">
          <h1 className='font-bold text-center text-4xl p-30 bg-gray-800 text-white'>{book.bookgeneric}</h1>
          {/* Book Details */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {book.bookname}
            </h2>

            <div className="flex items-center mb-1">
              <span className="text-3xl font-bold text-gray-800">{book.bookauthor}</span>
            </div>
            <p className='text-green-500 text-lg font-bold'>Rs. {book.bookprice}</p>

            {/* Buttons */}
            <div className="flex gap-3">
              <Link to={`/edit/${id}`}>
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg cursor-pointer">
                  Edit
                </button>
              </Link>
              <button onClick={deleteBookWithId} className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg cursor-pointer">
                Delete
              </button>
            </div>

          </div>

          {/* Back to Home */}
          <div className="px-6 pb-6">
            <Link to="/">
              <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg transition duration-200 cursor-pointer">
                Back to home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePage