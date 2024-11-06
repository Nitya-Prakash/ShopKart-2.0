import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/Axios'

const Home = () => {
    const [products] = useContext(ProductContext)

    const { search } = useLocation();
    const category = decodeURIComponent(search.split("=")[1]);

    const [filterProducts, setFilterProducts] = useState(null)

    const getProductsCategory = async () => {
        try {
            const { data } = await axios.get(`/products/category/${category}`);
            setFilterProducts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (!filterProducts || category == "undefined") setFilterProducts(products)
        if (category != "undefined")
            //  getProductsCategory();
            setFilterProducts(products.filter(prod => prod.category == category))
    }, [category, products])

    return products ? (
        <>
            <Navbar />
            <div className='w-[80%] h-full p-2 flex flex-wrap overflow-x-hidden overflow-y-auto'>

                {filterProducts && filterProducts.map((item, index) =>

                    <Link key={index} to={`/ProductDetails/${item.id}`} className='w-[23%] h-[40vh] mb-3 mr-3 card p-3 border shadow rounded flex flex-col items-center justify-center cursor-pointer'>
                        <div className='w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center hover:scale-105 transition-all' style={{ backgroundImage: `url(${item.image})` }}></div>
                        <h2 className='text-center text-base leading-4 font-medium'>{item.title}</h2>
                    </Link>
                )}


            </div>
        </>
    ) : null
}

export default Home