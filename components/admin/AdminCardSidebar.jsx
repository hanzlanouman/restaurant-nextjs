import React from 'react';
import { Button } from '@/components/ui/Button';
import { SignOutButton, currentUser } from '@clerk/nextjs';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
const AdminCardSidebar = async ({ displayStyles }) => {
  const user = await currentUser();

  return (
    <div className='flex items-center justify-between  gap-x-0 '>
      <div className='flex justify-between items-center'>
        <Avatar>
          <AvatarImage src='/images/burger.jpg' />
          <AvatarFallback>Arfah Ali</AvatarFallback>
        </Avatar>
        <div className='flex flex-col justify-center ml-4'>
          <p className='text-base font-semibold'>
            <span className='text-primary'>{user.firstName}</span>{' '}
            <span className=''>{user.lastName}</span>
          </p>
          <p className='text-sm font-light'>Head Chef</p>
        </div>
      </div>
      <div>
        <SignOutButton className='bg-transparent text-sp_orange rounded-full hover:bg-transparent transition-all duration-300 text-base'>
          Logout
        </SignOutButton>
      </div>
    </div>
  );
};

export default AdminCardSidebar;
