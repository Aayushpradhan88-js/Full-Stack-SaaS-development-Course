import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'   
import Effect from './hooks/Effect'

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/effect' element={<Effect />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App