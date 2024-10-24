import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [products] = useContext(ProductContext)

    let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category], []);
    distinct_category = [...new Set(distinct_category)];

    const color = () => {
        return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},0.7)`;
    }


    return (
        <nav className='w-[20%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
            <a className='px-5 py-2 border-2 bg-blue-50 border-blue-200 text-blue-500 rounded-md font-medium hover:bg-blue-100' href="/create">Add New Product</a>
            <hr className='w-[85%] border-2 rounded-3xl my-3' />
            <h1 className='w-[85%] text-2xl mb-4'>Catagory Filter</h1>
            <div className='w-[85%] '>
                <Link to={"/"} className='mb-2 flex items-center gap-2 text-lg text-teal-700 font-semibold hover:bg-zinc-200'>
                    <span style={{ backgroundColor: color() }} className='block w-[15px] h-[15px] rounded-full'></span>
                    Home
                </Link>
                {distinct_category.map((category, index) => (
                    <Link key={index} to={`/?category=${category}`} className='mb-2 flex items-center gap-2 text-lg hover:bg-zinc-200'>
                        <span style={{ backgroundColor: color() }} className='block w-[15px] h-[15px] rounded-full'></span>
                        {category}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Navbar