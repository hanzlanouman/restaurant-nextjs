'use client';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import DealCard from './DealCard';
import { Button } from './ui/button';
import { Poppins } from 'next/font/google';

const outfit = Poppins({
  subsets: ['latin'],
  weight: ['700', '400', '300', '500', '600'],
});

const deals = [
  {
    id: 1,
    title: 'Chicken Burger',
    description: 'Get 50% off on all chicken burgers',
    image: '/images/burger.jpg',
  },
  {
    id: 2,
    title: 'Pizza',
    description: 'Get 30% off on all pizzas',
    image: '/images/salad.jpg',
  },
  {
    id: 3,
    title: 'Fries',
    description: 'Get 20% off on all fries',
    image: '/images/sushi.jpg',
  },
];

const Deals = () => {
  return (
    <div className={`${outfit.className} flex flex-col bg-[#0d0d0e] w-screen`}>
      <div
        className='h-[785px] xl:h-[500px] container flex justify-between flex-col xl:flex-row md:flex-col md:items-center md:justify-between xl:items-start xl:justify-between mt-12
      '
      >
        <div
          className='
        flex xl:max-w-[500px] justify-center  text-center xl:text-left xl:items-start xl:justify-center xl:mt-20 mt-10 items-center md:items-center md:justify-center flex-col

            '
        >
          <h1
            className='
         text-7xl font-semibold text-white mb-10
      '
          >
            Special <span className='text-sp_orange'>Deals</span>
          </h1>
          <h4
            className='
          text-white text-lg
          max-w-[300px]
          md:max-w-[400px]
          xl:max-w-[500px]
          '
          >
            Get the best deals on your favorite food items. Hurry up! Limited
          </h4>
          <div>
            {/* <Button className='bg-primary py-4 px-10 text-white mt-5'>
              View All
            </Button> */}
          </div>
        </div>
        <div>
          <div className='xl:max-w-[600px] md:max-w-[800px]   flex items-center justify-center mt-5'>
            <Swiper
              className='h-[460px] max-h-[500px]'
              slidesPerView={1}
              breakpoints={{
                440: {
                  slidesPerView: 1,
                },

                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 2,
                },
                1536: {
                  slidesPerView: 2,
                },
              }}
              style={{
                '--swiper-pagination-color': '#fff',
              }}
              spaceBetween={30}
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              {/* Show Only First 3 */}
              {deals.map((deal, index) => {
                return (
                  <SwiperSlide key={index}>
                    <DealCard deal={deal} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;

// <Carousel className=' max-w-[100%] mx-auto xl:mx-0 xl:max-w-[600px] xl:mr-0 mb-10'>
//             <CarouselContent>
//               {deals.map((deal) => (
//                 <CarouselItem
//                   key={deal.id}
//                   className='
//                 flex-shrink-0 mr-4 max-w-[270px] xl:mr-0
//                     '
//                 >
//                   <DealCard deal={deal} />
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <CarouselNext

//             />
//             <CarouselPrevious />
//           </Carousel>
