import axios from '../utils/Axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading'

const ProductDetails = () => {
    const [singleProduct, setSingleProduct] = useState(null)

    const { id } = useParams();
    // console.log(id)

    const getSingleProducts = async () => {
        try {
            const { data } = await axios.get(`/products/${id}`)
            setSingleProduct(data)
            // console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSingleProducts();
    }, [])

    const navigate = useNavigate();
    const goBackHandler = () => {
        navigate(-1);
    }

    return singleProduct ? (
        <div className='w-[70%] h-auto m-auto px-10 py-5 flex items-center'>
            <img className='h-[90%] w-[40%] object-contain mr-16' src={`${singleProduct.image}`} alt="" />
            <div className="content flex flex-col gap-2">
                <h1 className='text-4xl font-semibold'>{singleProduct.title}</h1>
                <h2 className='text-zinc-600 font-medium text-lg'>{singleProduct.category}</h2>
                <h2 className='text-red-400 font-medium text-lg'>&#36; {singleProduct.price}</h2>
                <p>{singleProduct.description}</p>
                <div className='mt-5 flex items-center justify-between gap-5'>
                    <button onClick={goBackHandler} className='px-5 py-2 border border-black rounded-md text-black'>Back</button>
                    <div className='flex gap-3 items-center'>
                        <Link className='px-5 py-2 border border-blue-400 rounded-md text-blue-400'>Edit</Link>
                        <Link className='px-5 py-2 border border-red-400 rounded-md text-red-400'>Delete</Link>
                    </div>
                </div>
            </div>
        </div>
    ) : <Loading />
}

export default ProductDetails