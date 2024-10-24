import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useContext(ProductContext);
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const addProductHandler = (e) => {
        e.preventDefault();
        const product = {
            id: nanoid(), title, image, category, price, description
        };

        if (
            title.trim().length < 1 || image.trim().length < 1 || category.trim().length < 1 || price.trim().length < 1 || description.trim().length < 1
        ) {
            alert("No field should left empty !")
            return;
        }

        setProducts([...products, product]);
        localStorage.setItem("products", JSON.stringify([...products, product]))
        navigate("/")
    }

    const goBack = () => {
        navigate("/")
    }

    return (
        <>
            <form onSubmit={addProductHandler} className='p-[5%] w-screen h-screen flex flex-col items-center'>
                <h1 className='text-3xl w-1/2 mb-5 font-semibold'>Add New Product</h1>
                <input type="url" placeholder='Product Image Link' className='text-xl bg-zinc-200 rounded-md p-3 w-1/2 mb-4' onChange={(e) => setImage(e.target.value)} value={image} />
                <input type="text" placeholder='Product Title' className='text-xl bg-zinc-200 rounded-md p-3 w-1/2 mb-4' onChange={(e) => setTitle(e.target.value)} value={title} />
                <div className='w-1/2 flex justify-between'>
                    <input type="text" placeholder='Category' className='text-xl bg-zinc-200 rounded-md p-3 w-[48%] mb-4' onChange={(e) => setCategory(e.target.value)} value={category} />
                    <input type="number" placeholder='Price' className='text-xl bg-zinc-200 rounded-md p-3 w-[48%] mb-4' onChange={(e) => setPrice(e.target.value)} value={price} />
                </div>
                <textarea name="" id="" rows="6" placeholder='Product Description' className='text-xl bg-zinc-200 rounded-md p-3 w-1/2 mb-4 resize-none' onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                <div className='w-1/2 flex justify-between'>
                    <button onClick={goBack} className='px-5 py-2 bg-blue-50 border-2 border-blue-200 text-blue-500 rounded-md font-medium hover:bg-blue-100'>
                        Back
                    </button>
                    <button className='px-5 py-2 bg-blue-50 border-2 border-blue-200 text-blue-500 rounded-md font-medium hover:bg-blue-100'>Add New Product</button>
                </div>
            </form>
        </>
    )
}

export default Create