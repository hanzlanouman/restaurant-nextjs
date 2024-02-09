import React from 'react';
import BookingForm from './BookingForm';
import Image from 'next/image';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['700', '400', '300', '500'],
});
const BookTable = () => {
  return (
    <div className='w-full mx-auto relative'>
      <div
        className='absolute w-full h-[170vh] z-[-10] xl:h-[114vh] md:h-[95vh] bg-black top-0 left-0
    '
      >
        <Image
          src='/images/book-1.jpeg'
          alt='Hero Image'
          width={2000}
          height={2000}
          className=' object-cover object-bottom w-full h-[100%] brightness-[0.27]
          filter blur-[1.2px]'
          priority
        />
      </div>
      <div className='container mx-auto'>
        <div
          className={`flex flex-col xl:flex-row md:flex-row justify-between items-center xl:items-start md:items-start py-20 ${ubuntu.className}`}
        >
          <div className='xl:max-w-[600px] text-white py-12 md:max-w-[450px] md:mr-16 text-center md:text-left'>
            <h1
              className='
            text-7xl font-semibold text-primary  text-center xl:text-left md:text-left
          '
            >
              <span className='text-sp_orange'>Book</span> a Table
            </h1>
            <p className='text-xl xl:mt-10'>
              You can book a table at our restaurant by filling out the form &
              we will get back to you as soon as possible.
            </p>
            <p
              className='mt-4 text-l xl:mt-10

            '
            >
              Please fill out the form to book a table
            </p>
            <p className='xl:mt-10'>
              You can also call her on{' '}
              <span className='text-sp_orange text-xl'>+92-310-5026542</span>
            </p>
          </div>
          <div className='flex items-start justify-start '>
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
