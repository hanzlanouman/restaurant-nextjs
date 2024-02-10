import React from 'react';
import About from '@/components/About';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className='bg-zinc-800'>
      <About />
      <div className='container text-white  py-20 '>
        <h1 className='text-4xl font-semibold text-center'>
          Check out{' '}
          <Link href='/menu' className=''>
            {' '}
            Our <span className='text-sp_orange underline font-bold'>Menu</span>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default AboutPage;
