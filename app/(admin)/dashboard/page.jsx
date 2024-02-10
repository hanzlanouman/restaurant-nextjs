import React from 'react';
import { currentUser } from '@clerk/nextjs';
import Sales7Days from '@/components/admin/Sales7Days';
import Orders7Days from '@/components/admin/Orders7Days';
import CurrentOrders from '@/components/admin/CurrentOrders';
import MonthlyReport from '@/components/admin/MonthlyReport';
import DaySummary from '@/components/admin/DaySummary';

const DashboardHome = async () => {
  return (
    <div className=' text-white bg-zinc-800 items-center justify-center p-10 w-full flex-col xl:flex-row'>
      <div className='flex flex-col gap-y-7 items-center justify-center '>
        <h1 className='text-3xl font-semibold py-2'>Admin Home </h1>
        <div className=' flex gap-x-4 flex-col xl:flex-row gap-y-4'>
          <Sales7Days />
          <Orders7Days />
          <CurrentOrders />
          {/* <DaySummary /> */}
        </div>
        <MonthlyReport />
      </div>
    </div>
  );
};

export default DashboardHome;
