'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const EditItemsForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const form = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !price || !image) {
      alert('Please fill all the fields');
      return;
    }

    try {
      const res = await fetch('/apis/MenuItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, price, image }),
      });

      if (!res.ok) {
        throw new Error('Failed to add product');
      }

      alert('Product added successfully');
    } catch (error) {
      console.error('Error adding product', error);
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
              value={title}
            />
          </div>
          <div>
            <label className='block mb-2'>Description</label>
            <textarea
              placeholder='Product Description'
              className='text-white bg-zinc-900 w-full p-2'
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div>
            <label className='block mb-2'>Price</label>
            <input
              type='number'
              placeholder='Product Price'
              className='text-white bg-zinc-900 w-full p-2'
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>
          <div>
            <label className='block mb-2'>Image URL</label>
            <input
              type='text'
              placeholder='Product Image URL'
              className='text-white bg-zinc-900 w-full p-2'
              onChange={(e) => setImage(e.target.value)}
              value={image}
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
