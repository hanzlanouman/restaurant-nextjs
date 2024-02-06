import Image from 'next/image';
import React from 'react';
import { Ubuntu } from 'next/font/google';
import { Button } from './ui/button';

const outFit = Ubuntu({
  subsets: ['latin'],
  weight: ['700', '400', '300'],
});

const Hero = () => {
  return (
    <div className={outFit.className}>
      <div
        className='absolute top-[0px] left-0 w-full h-[919px] z-[-10]
       
    '
      >
        <Image
          src='/images/hero-2.jpg'
          alt='Hero Image'
          width={2000}
          height={2000}
          className=' object-cover object-bottom w-full h-[90%]   brightness-[0.3]
          filter blur-[0.5px]'
          priority
        />
      </div>
      {/* Hero Title And CTA */}
      <div
        className='
        flex flex-col xl:max-w-[600px] xl:mt-20 xl:px-0 py-10 px-0
        xl:text-left text-center mt-10
        '
      >
        {/* Title */}
        <h1
          className='
        xl:text-7xl text-6xl font-bold text-white tracking-wide
      '
        >
          Delicious Food, Delivered To{' '}
          <span className='text-green-600'>You</span>
        </h1>
        <p
          className='
            mt-4 xl:text-lg text-m text-gray-300
            '
        >
          Our team of chefs work hard to bring you the best food in the city.
          From the freshest ingredients, to the most delicious recipes, we
          guarantee you will be satisfied.
        </p>
        <div
          className='
            flex justify-center xl:justify-start mt-6 xl:mt-8

            '
        >
          <Button
            className='
            bg-primary text-white min-w-[200px] py-6 mt-3 rounded-full
            hover:bg-green-700 transition-all duration-300 text-xl
            '
          >
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
