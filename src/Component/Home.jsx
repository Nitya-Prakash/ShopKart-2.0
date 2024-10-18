import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='w-[80%] h-full p-2 flex flex-wrap overflow-x-hidden overflow-y-auto'>
                <Link to="/ProductDetails/1" className='w-[23%] h-[40vh] mb-3 mr-3 card p-3 border shadow rounded flex flex-col items-center justify-center cursor-pointer'>
                    <div className='w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center hover:scale-105' style={{ backgroundImage: "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)" }}></div>
                    <h2 className='text-center text-base font-medium'>Fjallraven-Foldsack No.1 Backpack, Fits 15 Laptops</h2>
                </Link>
            </div>
        </>
    )
}

export default Home