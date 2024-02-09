'use client';
import React from 'react';
import Image from 'next/image';
import Logo from './Logo';
import { Mail, MapPinned, PhoneCall } from 'lucide-react';
import { Ubuntu } from 'next/font/google';
import {
  RiFacebookCircleFill,
  RiFacebookCircleLine,
  RiInstagramLine,
  RiTiktokLine,
  RiTwitterXLine,
} from 'react-icons/ri';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const outFit = Ubuntu({
  subsets: ['latin'],
  weight: ['700', '400', '300'],
});

const gallery = [
  '/images/piza.avif',
  '/images/sushi.jpg',
  '/images/salad.jpg',
  '/images/hero-1.jpg',
  '/images/hero-4.jpg',
  '/images/book-1.jpeg',
];
const Footer = () => {
  return (
    <footer
      className={`w-full bg-[#0d0d0e] py-2 text-white ${outFit.className}`}
    >
      <div className='flex border-t border-primary  container justify-between'>
        <div className='flex flex-col gap-y-12 justify-between items-start xl:items-center gap-x-[10rem] xl:flex-row md:flex-col md:justify-center py-10 xl:py-0 '>
          <div className='flex flex-col items-start gap-y-4 max-w-[500px] '>
            <div>
              <Logo />
              <h2 className='text-xl font-semibold mt-4'>
                {' '}
                How to Reach us{' '}
                <span className='text-sp_orange font-bold text-2xl'>?</span>
              </h2>
              <div className='flex items-left  items-center justify-center mt-2'>
                <MapPinned size={34} />
                <p className='text-sm ml-2 font-light  text-left'>
                  Sector F-7, Blue Area, Islamabad, Pakistan
                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <PhoneCall size={24} />
              <p className='text-sm ml-2 font-light'>+92 333 1234567</p>
            </div>
            <div className='flex items-center'>
              <Mail size={24} />
              <p className='text-sm ml-2 font-light'>
                query@
                <span className='text-primary font-semibold'>southkitchen</span>
                <span className='text-sp_orange'>.</span>com
              </p>
            </div>
          </div>
          <div className='flex gap-x-24 justify-center xl:flex-row md:flex-row'>
            <div className='flex  xl:flex-row  mt-10 gap-x-16 xl:gap-x-48'>
              {/* First Section */}
              {/* Second Section */}

              <div className='flex flex-col gap-y-6'>
                <h2 className='text-2xl font-semibold text-sp_orange'>
                  Services
                </h2>
                <div className='flex flex-col gap-y-4 border-l border-primary px-4'>
                  <a href='#' className=' font-light'>
                    Delivery
                  </a>
                  <a href='#' className=' font-light'>
                    Take Away
                  </a>
                  <a href='#' className=' font-light'>
                    Dine In
                  </a>
                  <a href='#' className=' font-light'>
                    Catering
                  </a>
                </div>
              </div>
            </div>
            {/* Third Section */}
            <div className='flex flex-col gap-y-5 justify-center mt-10 '>
              <h2 className='text-2xl font-semibold text-primary'> Socials </h2>
              <div className='flex flex-col gap-x-4 gap-y-4 border-l border-primary px-4 '>
                <a
                  href='#'
                  className=' font-light flex items-center justify-start gap-x-2'
                >
                  <RiFacebookCircleLine size={24} />
                  <p className='text-sm font-light  xl:flex'>Facebook</p>
                </a>
                <a
                  href='#'
                  className=' font-light flex items-center justify-start gap-x-2'
                >
                  <RiInstagramLine size={24} />
                  <p className='text-sm font-light  xl:flex'>Instagram</p>
                </a>
                <a
                  href='#'
                  className=' font-light flex items-center justify-start gap-x-2'
                >
                  <RiTwitterXLine size={24} />
                  <p className='text-sm font-light  xl:flex'>Twitter</p>
                </a>
                <a
                  href='#'
                  className=' font-light flex items-center justify-start gap-x-2'
                >
                  <RiTiktokLine size={24} />
                  <p className='text-sm font-light  xl:flex'>Tiktok</p>
                </a>
              </div>
            </div>
            {/* Gallery */}
          </div>
          <div className='flex flex-col justify-center xl:mt-8'>
            <h2 className='text-2xl font-semibold text-sp_orange mt-0 xl:mt-10 mb-1'>
              Gallery
            </h2>
            <div className='grid grid-cols-3 xl:grid-cols-3  gap-2 mt-2 items-center'>
              {gallery.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt='gallery'
                  width={100}
                  height={100}
                  className='rounded-xl object-cover h-[100px] '
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className='
       mt-12 border-t border-sp_orange py-4 container
      '
      >
        <p className='text-center text-sm '>
          &copy; 2023 <span className='text-primary'>South Kitchen</span>
          <span className='text-sp_orange'>.</span> All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
