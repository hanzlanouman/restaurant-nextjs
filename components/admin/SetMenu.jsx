'use client';
import { PlusIcon, Trash } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { RiEdit2Line } from 'react-icons/ri';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const SetMenu = () => {
  const router = useRouter();
  const data = [
    {
      title: 'Burger',
      price: 200,
      description:
        'A delicious burger, with a juicy patty and fresh veggies, served with fries and a drink.',
      image: '/images/burger.jpg',
    },
    {
      title: 'Pizza',
      price: 300,
      description: 'A delicious pizza',
      image: '/images/piza.avif',
    },
    {
      title: 'Pasta',
      price: 250,
      description: 'A delicious pasta',
      image: '/images/salad.jpg',
    },
    {
      title: 'Burger Acid Very large',
      price: 200,
      description: 'A delicious burger',
      image: '/images/burger.jpg',
    },
    {
      title: 'Pizza',
      price: 300,
      description: 'A delicious pizza',
      image: '/images/piza.avif',
    },
  ];
  return (
    <div className='flex flex-col mx-10 my-6 gap-y-2 h-[77.7vh] '>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-bold mx-4 text-zinc-300'>Menu Items</h1>
        <Button
          className='bg-transparent hover:bg-transparent hover:text-primary ease-in-out duration-700 text-lg text-sp_orange w-[160px] rounded-lg p-2 '
          onClick={() => router.push('/setmenu/addMenu')}
        >
          <PlusIcon className='text-2xl ml-2' /> Add Item
        </Button>
      </div>
      <div className='w-[74.669vw] border-primary border-2 rounded-lg text-white container'>
        {/* Table */}
        <div className='flex justify-between items-center p-2 border-b border-sp_orange py-4'>
          <p className=' font-bold hidden xl:block'>S/N</p>
          <h1 className=' font-bold w-64'>Title</h1>

          <p className=' font-bold w-24'>Price</p>
          <p className=' font-bold hidden xl:block'>Thumbnail</p>
          <p className=' font-bold'>Action</p>
        </div>
        {data.map((item, index) => (
          <div key={index} className='py-4 border-b border-muted-foreground'>
            <div className=' flex  justify-between items-center'>
              <p className=' font-semibold hidden xl:block'>{index + 1}</p>
              <h1 className=' font-bold  line-clamp-1 w-24 xl:w-64'>
                {item.title}
              </h1>

              <p className=' font-semibold w-24'> ${item.price}</p>
              <Image
                src={item.image}
                alt={item.title}
                width={60}
                height={60}
                className='object-cover w-16 h-16 rounded-sm hidden xl:block'
              />
              <div className='flex gap-x-2'>
                {' '}
                <RiEdit2Line className='text-2xl cursor-pointer' />
                <Trash className='text-2xl cursor-pointer' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetMenu;
