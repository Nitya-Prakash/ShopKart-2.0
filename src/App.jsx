import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import ProductDetails from './Component/ProductDetails'
import Create from './Component/Create'
import Edit from './Component/Edit'

const App = () => {
    return (
        <div className='h-screen w-screen flex'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/ProductDetails/:id" element={<ProductDetails />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
        </div>
    )
}

export default App