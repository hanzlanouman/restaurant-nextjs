'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const EditItemsForm = ({ MenuItem =[] }) => {
  const { title, description, image,price} = MenuItem;
  const [newTitle, setTitle] = useState(title);
  const [newDescription, setDescription] = useState(description);
  const [newPrice, setPrice] = useState(price);
  const [newImage, setImage] = useState(image);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/apis/MenuItems/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newTitle,
          description: newDescription,
          price: newPrice,
          image: newImage,
        }),
      });
      if (!res.ok) {
        throw new Error('Failed to update product');
      }
      alert('Product updated successfully');
      router.push('/setmenu');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };
  return (
    <div className='flex justify-center items-center'>
    <form onSubmit={handleSubmit}
      className='space-y-4 text-white flex justify-center flex-col  w-full xl:min-w-[500px] min-w-[97.5vw] md:min-w-[400px] xl:items-start'
    >
      <div className='flex flex-col space-y-4 w-full  xl:max-w-[450px] rounded-xl bg-zinc-800 p-8 shadow-2xl '>
        <div className='flex flex-col space-y-4'>
          <h1 className='text-4xl font-semibold text-primary text-center xl:text-left md:text-left'>
            Edit Items
          </h1>
          <div>
            <label className='block mb-2'>Title</label>
            <input
              type='text'
              placeholder='Product Title'
              className='text-white bg-zinc-900 w-full p-2'
              onChange={(e) => setTitle(e.target.value)}
              value={newTitle}
            />
          </div>
          <div>
            <label className='block mb-2'>Description</label>
            <textarea
              placeholder='Product Description'
              className='text-white bg-zinc-900 w-full p-2'
              onChange={(e) => setDescription(e.target.value)}
              value={newDescription}
            />
          </div>
          <div>
            <label className='block mb-2'>Price</label>
            <input
              type='number'
              placeholder='Product Price'
              className='text-white bg-zinc-900 w-full p-2'
              onChange={(e) => setPrice(e.target.value)}
              value={newPrice}
            />
          </div>
          <div>
            <label className='block mb-2'>Image URL</label>
            <input
              type='text'
              placeholder='Product Image URL'
              className='text-white bg-zinc-900 w-full p-2'
              onChange={(e) => setImage(e.target.value)}
              value={newImage}
            />
          </div>
        </div>
        <div className='flex justify-end items-end'>
          <button
            type='submit'
            className='min-w-[120px] text-base bg-transparent border-2 border-primary hover:bg-primary hover:text-zinc-white hover:border-transparent p-2'
          >
            Add Product
          </button>
        </div>
      </div>
    </form>
    </div>
  );
};

export default EditItemsForm;
