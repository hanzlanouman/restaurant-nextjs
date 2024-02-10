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
const data = [
  {
    name: '1/1',
    orders: 4000,
    sales: 2400,
    amt: 2400,
  },
  {
    name: '5/1',
    orders: 3000,
    sales: 1398,
    amt: 2210,
  },
  {
    name: '10/1',
    orders: 2000,
    sales: 9800,
    amt: 2290,
  },
  {
    name: '15/1',
    orders: 2780,
    sales: 3908,
    amt: 2000,
  },
  {
    name: '20/1',
    orders: 1890,
    sales: 4800,
    amt: 2181,
  },
  {
    name: '25/1',
    orders: 2390,
    sales: 3800,
    amt: 2500,
  },
  {
    name: '30/1',
    orders: 2390,
    sales: 3800,
    amt: 2500,
  },
];

const MonthlyReport = () => {
  return (
    <div className='border-2 border-primary p-3 rounded-xl bg-zinc-900 xl:w-[1110px]'>
      <h3 className='text-2xl font-semibold '>Orders and Sales Report</h3>
      <p className='text-xl font-bold text-muted-foreground'>Past 30 days</p>
      <p className='text-xl font-bold text-muted-foreground'>
        Sale: $ 1,00,000
      </p>
      <p className='text-xl font-bold mb-6 text-muted-foreground'>Orders: 73</p>
      <div>
        <ResponsiveContainer width='100%' height={240}>
          <LineChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 8,
              right: 30,
              left: 20,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='sales'
              stroke='#fe705a'
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8 }}
            />
            <Line
              type='monotone'
              dataKey='orders'
              stroke='#297e4a'
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyReport;
