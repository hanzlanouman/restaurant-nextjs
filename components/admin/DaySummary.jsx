import React from 'react';
import { Button } from '../ui/button';
import { RiEyeLine } from 'react-icons/ri';

const DaySummary = () => {
  return (
    <div className='bg-zinc-900 p-4 shadow-lg rounded-lg w-[240px] max-h-[500px] border-2 border-primary min-h-[500px] flex justify-between'>
      <div className='flex flex-col gap-y-2'>
        <h3 className=' text-2xl font-semibold'>Current Orders</h3>
        <p className='text-xl font-bold '>3</p>
      </div>
      <div className='flex flex-col items-end justify-end'>
        <Button
          className='bg-transparent text-primary font-bold hover:bg-transparent hover:text-sp_orange
          ease-in-out duration-700'
        >
          <RiEyeLine size={24} />
        </Button>
      </div>
    </div>
  );
};

export default DaySummary;
