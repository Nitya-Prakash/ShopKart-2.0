import React from 'react'
import { Link } from 'react-router-dom'

const ProductDetails = () => {
    return (
        // <div className='w-[70%] h-full bg-red-100 m-auto p-28 flex items-center'>
        //     <img className='h-[90%] mr-16' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        //     <div className="content">
        //         <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, eius?</h1>
        //         <h2>Men's Clothing</h2>
        //         <h2>$109.95</h2>
        //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero nulla deserunt cumque error nam tempore aut tempora sequi commodi.</p>
        //         <Link>Edit</Link>
        //         <Link>Delete</Link>
        //     </div>
        // </div>
        <div className='w-[70%] h-auto m-auto px-10 py-5 flex items-center'>
            <img className='h-[90%] w-[40%] object-contain mr-16' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
            <div className="content flex flex-col gap-2">
                <h1 className='text-4xl font-semibold'>Fjallraven-Foldsack No.1 Backpack, Fits 15 Laptops</h1>
                <h2 className='text-zinc-600 font-medium text-lg'>Men's Clothing</h2>
                <h2 className='text-red-400 font-medium text-lg'>$109.95</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero nulla deserunt cumque error nam tempore aut tempora sequi commodi.</p>
                <div className='mt-5 flex gap-5'>
                    <Link className='px-5 py-2 border border-blue-400 rounded-md text-blue-400'>Edit</Link>
                    <Link className='px-5 py-2 border border-red-400 rounded-md text-red-400'>Delete</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails