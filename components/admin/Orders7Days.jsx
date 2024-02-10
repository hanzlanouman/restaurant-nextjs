'use client';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Button } from '../ui/button';
import { ViewIcon } from 'lucide-react';
import { RiEye2Line, RiEyeLine } from 'react-icons/ri';
const Orders7Days = () => {
  const orderData = [
    {
      order: 'Order 1',
      pv: 2400,
    },
    {
      order: 'Order 2',
      pv: 1398,
    },
    {
      order: 'Order 3',
      pv: 9800,
    },
    {
      order: 'Order 4',
      pv: 3908,
    },
    {
      order: 'Order 5',
      pv: 4800,
    },
    {
      order: 'Order 6',
      pv: 3800,
    },
    {
      order: 'Order 7',
      pv: 8000,
    },
  ];
  return (
    <div className='bg-zinc-900 p-4 shadow-lg rounded-lg w-[420px] max-h-[200px] border-2 border-primary min-h-[150px] flex justify-between'>
      <div className='flex flex-col gap-y-2'>
        <h3 className=' text-2xl font-semibold'>Orders in 7 days</h3>
        <p className='text-xl font-bold'>73</p>
        <p className='text-sm text-gray-400'>+ 15% more orders</p>
      </div>
      <div className='flex flex-col items-end  justify-between'>
        <LineChart width={100} height={100} data={orderData}>
          <Line
            type='monotone'
            dataKey='pv'
            stroke='#fe705a'
            strokeWidth={2}
            dot={false}
          />
          <Tooltip />
        </LineChart>
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

export default Orders7Days;
