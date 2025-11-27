import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Button from '../components/Button'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreatePage = () => {
  const [bookname, setBookName] = useState('');
  const [bookauthor, setBookAuthor] = useState('');
  const [bookprice, setBookPrice] = useState('');
  const [bookgeneric, setBookGeneric] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const createBook = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const save = await axios.post('http://localhost:3000/api/books/', {
        bookname,
        bookauthor,
        bookprice,
        bookgeneric
      });
      console.log("data", save)
      if (save) {
        navigate("/");
        setLoading(false);
        alert("book created successfully");
      } else {
        navigate("/");
        setError("failed to create book");
        setLoading(false);
        alert("failed to create book");
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
    finally {
      setLoading(false)
    };
  };


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
                {/* <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline"> */}
                {error}
                {/* </h3> */}
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
    <div className=" bg-black min-h-screen">
      <NavBar />
      <Link to="/">
        <div className='mt-4  ml-3'>
          <Button title="Back to home" />
        </div>
      </Link>

      <form onSubmit={createBook}>
        <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
            Create Book
          </div>

          <div className="py-4 px-6" >
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Book Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="bookname"
                type="text"
                value={bookname}
                onChange={(e) => setBookName(e.target.value)}
                placeholder="Bhagwat Geeta" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Book Author
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="bookauthor"
                type="text"
                value={bookauthor}
                onChange={(e) => setBookAuthor(e.target.value)}
                placeholder="Maharishi Ved Vyasa" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Book Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="bookprice"
                type="text"
                value={bookprice}
                onChange={(e) => setBookPrice(e.target.value)}
                placeholder="1000" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Book Generic
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="bookgeneric"
                type="text"
                value={bookgeneric}
                onChange={(e) => setBookGeneric(e.target.value)}
                placeholder="Hinduism" />
            </div>

            <div className="flex items-center justify-center mb-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-gray-900 cursor-pointer text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline" type="submit">
                {loading ? (
                  <>
                    <div aria-label="Loading..." role="status"><svg className="h-12 w-12 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                      <line x1={128} y1={32} x2={128} y2={64} strokeLinecap="round" strokeLinejoin="round" strokeWidth={24} />
                      <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={24} />
                      <line x1={224} y1={128} x2={192} y2={128} strokeLinecap="round" strokeLinejoin="round" strokeWidth={24}>
                      </line>
                      <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={24} />
                      <line x1={128} y1={224} x2={128} y2={192} strokeLinecap="round" strokeLinejoin="round" strokeWidth={24}>
                      </line>
                      <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={24} />
                      <line x1={32} y1={128} x2={64} y2={128} strokeLinecap="round" strokeLinejoin="round" strokeWidth={24} />
                      <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={24}>
                      </line>
                    </svg>
                    </div>
                    creating...
                  </>
                ) : ('create')}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreatePage