import React from 'react';
import { Ubuntu } from 'next/font/google';
import MenuList from './MenuList';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const menuItems = [
  {
    id: 1,
    title: 'Pizza',
    description: 'Delicious pizza with a variety of toppings',
    price: 12.99,
    image: '/images/piza.avif',
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Fresh sushi made with the finest ingredients',
    price: 15.99,
    image: '/images/sushi.jpg',
  },
  {
    id: 3,
    title: 'Salad',
    description: 'Healthy salad made with fresh vegetables',
    price: 9.99,
    image: '/images/salad.jpg',
  },
  {
    id: 4,
    title: 'Burger',
    description: 'Juicy burger with a variety of toppings',
    price: 10.99,
    image: '/images/burger.jpg',
  },
  {
    id: 5,
    title: 'Pizza',
    description: 'Delicious pizza with a variety of toppings',
    price: 12.99,
    image: '/images/piza.avif',
  },
  {
    id: 6,
    title: 'Sushi',
    description: 'Fresh sushi made with the finest ingredients',
    price: 15.99,
    image: '/images/sushi.jpg',
  },
  {
    id: 7,
    title: 'Salad',
    description: 'Healthy salad made with fresh vegetables',
    price: 9.99,
    image: '/images/salad.jpg',
  },
  {
    id: 8,
    title: 'Burger',
    description: 'Juicy burger with a variety of toppings',
    price: 10.99,
    image: '/images/burger.jpg',
  },
  {
    id: 9,
    title: 'Pizza',
    description: 'Delicious pizza with a variety of toppings',
    price: 12.99,
    image: '/images/piza.avif',
  },
  {
    id: 10,
    title: 'Sushi',
    description: 'Fresh sushi made with the finest ingredients',
    price: 15.99,
    image: '/images/sushi.jpg',
  },
  {
    id: 11,
    title: 'Salad',
    description: 'Healthy salad made with fresh vegetables',
    price: 9.99,
    image: '/images/salad.jpg',
  },
  {
    id: 12,
    title: 'Burger',
    description: 'Juicy burger with a variety of toppings',
    price: 10.99,
    image: '/images/burger.jpg',
  },
  {
    id: 13,
    title: 'Burger',
    description:
      'Juicy burger with a variety of toppings, made with love, and served with a smile, and a side of fries, and a drink',
    price: 10.99,
    image: '/images/burger.jpg',
  },
];

const Menu = () => {
  return (
    <section className={`bg-zinc-800 ${ubuntu.className} py-16`}>
      {/* Main Wrapper */}
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center'>
          {/* Menu Header */}
          <div>
            <h1 className='text-center text-5xl text-primary font-semibold'>
              Our <span className='text-sp_orange'>Menu</span>
            </h1>
            <p className='text-center mt-4 text-gray-200'>
              We have a wide range of dishes on our menu that you can choose
              from.
            </p>
          </div>
          {/* Menu Search, Filter Sort Options */}
          <div className='flex gap-x-2 justify-center'></div>
          {/* Menu List */}
          <div>
            {/* Menu Cards */}
            <MenuList menuList={menuItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
