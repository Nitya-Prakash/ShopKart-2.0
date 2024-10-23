import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import ProductDetails from './Component/ProductDetails'

const App = () => {
    return (
        <div className='h-screen w-screen flex'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ProductDetails/:id" element={<ProductDetails />} />
            </Routes>
        </div>
    )
}

export default App