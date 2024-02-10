import React from 'react';
import Logo from '../Logo';
import {
  RiMailLine,
  RiMailUnreadLine,
  RiNotification3Line,
  RiTaskLine,
} from 'react-icons/ri';
import MobileSideNav from './MobileSideNav';

const NavbarAdmin = () => {
  return (
    <div className='flex text-white items-center justify-between bg-zinc-900 py-4'>
      <MobileSideNav displayStyle='xl:hidden px-4' />
      <div
        className='w-[320px]  bg-zinc-900  text-center items-center hidden xl:block
      '
      >
        <h1
          className={`h2 text-primary  font-semibold  text-3xl dark:text-white cursor-pointer tracking-tight xl:tracking-wider text-center`}
        >
          dashboard
          <span
            className='text-sp_orange font-black text-4xl dark:text-primary transform rotate-12 transition-all duration-300 ease-in-out hover:text-primary hover:rotate-0
    '
          >
            .
          </span>
        </h1>
      </div>
      {/* Second Part */}

      <div className='flex items-center justify-end px-6 gap-x-4  '>
        <RiMailUnreadLine className='text-2xl cursor-pointer ' />
        <RiNotification3Line className='text-2xl cursor-pointer' />
      </div>
    </div>
  );
};

export default NavbarAdmin;
