import Image from 'next/image';
import React from 'react';
import { Ubuntu } from 'next/font/google';
import { Button } from './ui/button';
import { RiArrowDownSLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
const outFit = Ubuntu({
  subsets: ['latin'],
  weight: ['700', '400', '300'],
});

const Hero = () => {
  return (
    <section
      className='container 
    '
    >
      <div className={`${outFit.className}  flex flex-col`}>
        <div
          className='absolute top-[0px] left-0 w-full h-[118vh] z-[-10]
       
    '
        >
          <Image
            src='/images/hero-2.jpg'
            alt='Hero Image'
            width={4000}
            height={4000}
            className=' object-cover object-bottom w-full h-[90%] brightness-[0.3]
          filter blur-[1px]'
            priority
          />
        </div>
        {/* Hero Title And CTA */}
        <div
          className='
        flex flex-col xl:max-w-[600px] xl:mt-20 xl:px-0 py-10 px-0
        xl:text-left text-center mt-10 xl:min-h-[83.34vh] md:min-h-[84vh] min-h-[85vh] xl:mb-0 md:mt-20
        transition-all duration-300
        '
        >
          {/* Title */}
          <h1
            className='
        xl:text-7xl text-6xl font-bold text-white tracking-wide md:max-w-[600px] mx-auto xl:mx-0
      '
          >
            Delicious Food, Delivered To{' '}
            <span className='text-green-600'>You</span>
          </h1>
          <p
            className='
            mt-4 xl:text-lg text-m text-gray-300 md:max-w-[600px] mx-auto md:mt-14
            '
          >
            Our team of chefs work hard to bring you the best food in the city.
            From the freshest ingredients, to the most delicious recipes, we
            guarantee you will be satisfied.
          </p>
          <div
            className='
            flex justify-center xl:justify-start mt-10 xl:mt-8
            gap-x-4 xl:gap-x-6 flex-col xl:flex-row mx-auto xl:mx-0 md:flex-row
            '
          >
            <Button
              className='
              bg-white text-slate-800 min-w-[200px] py-6 mt-3 rounded-full
              hover:bg-sp_orange hover:text-white transition-all duration-300 text-xl
              '
            >
              Book a Table
            </Button>
            <Button
              className='
            bg-primary text-white min-w-[200px] py-6 mt-3 rounded-full
            hover:bg-sp_orange transition-all duration-300 text-xl
            '
            >
              Order Now
            </Button>
          </div>
        </div>
        <div className='hidden xl:flex md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce duration-1000 items-center justify-center flex-col md:bottom-12'>
          <p className='text-primary '>Deals</p>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
