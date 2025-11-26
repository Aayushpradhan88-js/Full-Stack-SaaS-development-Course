import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import axios from 'axios'

const HomePage = () => {

  useEffect(() => {
    const fetchAllBooks = async () => {
     await axios.get('http://localhost:3000/api/books/')
        .then(response => {
          return response.data;
        }).catch(error => {
          return error;
        });
    };
    fetchAllBooks();
  }, []);

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