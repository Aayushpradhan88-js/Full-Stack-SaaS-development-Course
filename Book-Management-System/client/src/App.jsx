import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'   

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contacts/:id' element={
                    <div>
                        <a href="/">Go to home</a>
                    </div>
                }
                     />
            </Routes>
        </BrowserRouter>
    )
}

export default App