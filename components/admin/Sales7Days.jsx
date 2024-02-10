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
const Sales7Days = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 400,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className='bg-zinc-900 p-4 shadow-lg rounded-lg w-[420px] max-h-[200px] border-2 border-primary min-h-[150px] flex justify-between'>
      <div className='flex flex-col gap-y-2'>
        <h3 className=' text-2xl font-semibold'>Sales in 7 days</h3>
        <p className='text-xl font-bold '>$ 1,00,000</p>
        <p className='text-sm text-gray-400'>+ 20% from last week</p>
      </div>
      <div className='flex flex-col items-end  justify-between'>
        <LineChart width={100} height={100} data={data}>
          <Line
            type='monotone'
            dataKey='pv'
            stroke='#fe705a'
            strokeWidth={2}
            dot={false}
          />
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

export default Sales7Days;
