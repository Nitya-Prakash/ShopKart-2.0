import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-[20%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
            <a className='px-5 py-2 border-2 border-blue-200 text-blue-500 rounded-md font-medium' href="/create">Add New Product</a>
            <hr className='w-[85%] border-2 rounded-3xl my-3' />
            <h1 className='w-[85%] text-2xl mb-4'>Catagory Filter</h1>
            <ul className='w-[85%] '>
                <li className='mb-2 flex items-center gap-2 text-lg'>
                    <span className='block w-[15px] h-[15px] bg-blue-600 rounded-full'></span>
                    Catagory 1
                </li>
            </ul>
        </nav>
    )
}

export default Navbar