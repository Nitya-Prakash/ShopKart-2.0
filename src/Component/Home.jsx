import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'

const Home = () => {
    const [products] = useContext(ProductContext)
    // console.log(products)

    return products ? (
        <>
            <Navbar />
            <div className='w-[80%] h-full p-2 flex flex-wrap overflow-x-hidden overflow-y-auto'>

                {products.map((item, index) =>

                    <Link key={index} to={`/ProductDetails/${item.id}`} className='w-[23%] h-[40vh] mb-3 mr-3 card p-3 border shadow rounded flex flex-col items-center justify-center cursor-pointer'>
                        <div className='w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center hover:scale-105' style={{ backgroundImage: `url(${item.image})` }}></div>
                        <h2 className='text-center text-base leading-4 font-medium'>{item.title}</h2>
                    </Link>
                )}


            </div>
        </>
    ) : <Loading />
}

export default Home