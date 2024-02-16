'use client'
import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const productSchema = z.object({
  title: z.string().min(3).max(50),
  description: z.string().min(10).max(1000),
  price: z.number().positive(),
  image: z.string().url(),
});



const AddProductForm = () => {
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');


  const form = useForm({
    resolver: zodResolver(productSchema),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !price || !image) {
      alert('Please fill all the fields');
      return;
    }

    try{
      const res = await fetch('/api/MenuItems', {
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
    }
    catch (error) {
      console.log('Error adding product', error);
    }


  };

  return (
    <Form >
      <form onSubmit={handleSubmit}
        className='space-y-4 text-white flex justify-center flex-col  w-full xl:min-w-[500px] min-w-[97.5vw] md:min-w-[400px] xl:items-start'
      >
        <div className='flex flex-col space-y-4 w-full  xl:max-w-[450px] rounded-xl bg-zinc-800 p-8 shadow-2xl '>
          <div className='flex flex-col space-y-4'>
            <h1 className='text-4xl font-semibold text-primary text-center xl:text-left md:text-left'>
              Add Product
            </h1>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Product Title'
                      {...field}
                      className='text-white bg-zinc-900 '
                      onChange={(e)=>setTitle(e.target.value)}
                      value={title}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      as='textarea'
                      placeholder='Product Description'
                      {...field}
                      className='text-white bg-zinc-900 '
                      onChange={(e)=>setTitle(e.target.value)}
                      value={description}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='price'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      type='number'
                      placeholder='Product Price'
                      {...field}
                      className='text-white bg-zinc-900 '
                      onChange={(e)=>setTitle(e.target.value)}
                      value={price}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='image'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Product Image URL'
                      {...field}
                      className='text-white bg-zinc-900 '
                      onChange={(e)=>setTitle(e.target.value)}
                      value={image}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex justify-end items-end'>
            <Button
              type='submit'
              className='min-w-[120px] text-base bg-transparent border-2 border-primary hover:bg-primary hover:text-zinc-white hover:border-transparent'
            >
              Add Product
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default AddProductForm;
