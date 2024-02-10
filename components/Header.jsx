'use client';

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Cart from './Cart';
import { PersonStanding, Signal, User2 } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

const Header = () => {
  const [header, setHeader] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 110 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener('scroll', scrollYPos);
  }, [pathname]);

  return (
    <header
      className={` ${
        header
          ? 'xl:py-4 md:py-4 py-5 bg-zinc-900 shadow-lg dark:bg-accent'
          : 'xl:py-4 md:py-4 py-5 dark:bg-transparent  '
      } sticky top-0 z-30 transition-all bg-transparent
      ${pathname !== '/' && 'bg-zinc-900 shadow-lg dark:bg-accent'}
      `}
    >
      <div className='container mx-auto text-white'>
        <div className='flex justify-between items-center'>
          <div className='xl:hidden'>
            <Cart />
          </div>
          <Logo />
          <div className='flex gap-x-6'>
            <Nav
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full text-2xl'
            />
            <div className='xl:hidden'>
              <MobileNav />
            </div>
          </div>
          <div className='hidden xl:flex xl:justify-center items-center gap-x-4 '>
            <Link href='/menu'>
              <Button
                className='
            bg-sp_orange text-white min-w-[166px] py-3 mr-6 rounded-full
            hover:bg-primary transition-all duration-300 text-lg
            '
              >
                Menu
              </Button>
            </Link>
            <Cart isPage={true} className={`cursor-pointer`} />
            <User2
              size={25}
              className={`cursor-pointer `}
              onClick={() => console.log('user')}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
