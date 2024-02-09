import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const ubuntu = Montserrat({
  subsets: ['latin'],
  weight: ['700', '400', '300', '500'],
});

const About = () => {
  return (
    <section
      className={`${ubuntu.className} flex flex-col bg-zinc-800 text-white mt-[-5px] `}
    >
      <div className='container mx-auto pb-10'>
        <div className='flex-col items-center'>
          {/* Top Container */}
          <div className='flex flex-col text-center items-center justify-center mt-20'>
            <h1 className='text-7xl text-white font-semibold mb-6'>
              About <span className='text-primary'>Us</span>
            </h1>
            <p className='text-md max-w-[400px] md:max-w-[600px] xl:max-w-[600px]'>
              Serving the best food in the city for 20 years. Always fresh and
              made with love. We are committed to providing the best dining
              experience to our customers.
            </p>
          </div>
        </div>
        <div className='flex mt-16 flex-col xl:flex-row items-center xl:items-start text-center xl:text-left justify-center gap-x-8 gap-y-10'>
          {/* Bottom Container */}
          <div className=''>
            {/* Left Container with Image */}
            <div className='items-center '>
              <Image
                src='/images/about-1.avif'
                alt='About Image'
                width={2000}
                height={2000}
                className='object-cover w-full h-[50vh] rounded-xl'
                priority
              />
            </div>
          </div>
          <div>
            {/* Right Container with Text */}
            <div className='max-w-[700px]'>
              <h1 className='text-4xl font-semibold mb-4  underline underline-offset-8 text-primary text-center xl:text-left '>
                <span className='text-sp_orange underline'>Our</span> Story
              </h1>
              <p className='text-lg'>
                We are a family-owned restaurant that has been serving the best
                food in the city for 20 years. We are known for our amazing
                taste and quality of food.
              </p>
              <p className='text-lg mt-4'>
                We have a team of highly skilled chefs who are passionate about
                cooking and serving the best food to our customers. We have a
                wide range of dishes on our menu that you can choose from.
              </p>
              <p className='text-lg mt-4'>
                We are committed to providing the best dining experience to our
                customers. We use the freshest ingredients in our food and make
                sure that it is always made with love and care. 💖
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
