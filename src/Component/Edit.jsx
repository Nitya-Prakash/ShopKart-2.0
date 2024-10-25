import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import { toast } from 'react-toastify';

const Edit = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useContext(ProductContext);
    const [product, setProduct] = useState({
        title: "",
        image: "",
        category: "",
        price: "",
        description: ""
    })
    const { id } = useParams();
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const changeHandler = (event) => {
        // console.log(event.target.name, event.target.value)
        setProduct({ ...product, [event.target.name]: event.target.value });
    }

    useEffect(() => {
        setProduct(products.filter(p => p.id == id)[0])
    }, [id])

    const addProductHandler = (e) => {
        e.preventDefault();

        if (
            product.title.trim().length < 1 || product.image.trim().length < 1 || product.category.trim().length < 1 || product.price.trim().length < 1 || product.description.trim().length < 1
        ) {
            alert("No field should left empty !")
            return;
        }


        const pi = products.findIndex(p => p.id == id);
        const copyData = [...products];
        copyData[pi] = { ...products[pi], ...product }

        setProducts(copyData);
        localStorage.setItem("products", JSON.stringify(copyData))
        toast.success("Product Edited Succesfully !");
        navigate(-1)
    }

    const goBack = () => {
        navigate(-1)
    }

    return (
        <>
            <form onSubmit={addProductHandler} className='p-[5%] w-screen h-screen flex flex-col items-center'>
                <h1 className='text-3xl w-1/2 mb-5 font-semibold'>Edit Product</h1>
                <input type="url" placeholder='Product Image Link' className='text-xl bg-zinc-200 rounded-md p-3 w-1/2 mb-4' name="image" onChange={changeHandler} value={product && product.image} />
                <input type="text" placeholder='Product Title' className='text-xl bg-zinc-200 rounded-md p-3 w-1/2 mb-4' name="title" onChange={changeHandler} value={product && product.title} />
                <div className='w-1/2 flex justify-between'>
                    <input type="text" placeholder='Category' className='text-xl bg-zinc-200 rounded-md p-3 w-[48%] mb-4' name="category" onChange={changeHandler} value={product && product.category} />
                    <input type="number" placeholder='Price' className='text-xl bg-zinc-200 rounded-md p-3 w-[48%] mb-4' name="price" onChange={changeHandler} value={product && product.price} />
                </div>
                <textarea name="description" id="" rows="6" placeholder='Product Description' className='text-xl bg-zinc-200 rounded-md p-3 w-1/2 mb-4 resize-none' onChange={changeHandler} value={product && product.description}></textarea>
                <div className='w-1/2 flex justify-between'>
                    <button onClick={goBack} className='px-5 py-2 bg-blue-50 border-2 border-blue-200 text-blue-500 rounded-md font-medium hover:bg-blue-100'>
                        Back
                    </button>
                    <button className='px-5 py-2 bg-blue-50 border-2 border-blue-200 text-blue-500 rounded-md font-medium hover:bg-blue-100'>Edit Product</button>
                </div>
            </form>
        </>
    )
}

export default Edit