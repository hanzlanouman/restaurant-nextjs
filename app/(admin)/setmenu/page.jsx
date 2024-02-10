import React from 'react';

const SetMenu = () => {
  const data = [
    {
      title: 'Burger',
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
    {
      title: 'Pasta',
      price: 250,
      description: 'A delicious pasta',
      image: '/images/pasta.jpg',
    },
  ];
  return (
    <div className='bg-zinc-800 p-4'>
      <h1 className='text-3xl font-bold text-white'>Set Menu</h1>
    </div>
  );
};

export default SetMenu;
