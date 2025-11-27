import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EditPage from './pages/EditPage'
import SinglePage from './pages/SinglePage'
import CreatePage from './pages/CreatePage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/create' element={<CreatePage />} />
                <Route path='/edit' element={<EditPage />} />
                <Route path='/singlepage/:id' element={<SinglePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App