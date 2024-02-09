'use client';
import Image from 'next/image';
import { Card, CardHeader } from '@/components/ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const DealCard = ({ deal }) => {
  return (
    <Card className='min-h-[390px] max-h-[530px] border-none bg-zinc-800'>
      <CardHeader className='p-0'>
        <div
          className=' flex mx-auto
          h-[200px] max-w-[600px] w-full 
        '
        >
          <Image
            className='
             rounded-t-lg object-cover object-center
            '
            src={deal.image}
            width={850}
            height={350}
            alt='project image'
            priority
          />
        </div>
      </CardHeader>
      <div className='h-full p-4 flex flex-col items-stretch  justify-between'>
        <Badge className='uppercase text-xs font-medium mb-2 absolute top-2 left-2'>
          40% off
        </Badge>
        <h4 className='h4 text-white text-lg mb-3 '>{deal.title}</h4>
        <p
          className='text-white text-base 
          line-clamp-3
        '
        >
          1 Large Pizza, 1 Garlic Bread, 1.25L Drink & 1 Dipping Sauce (Choose
          from: BBQ, Sweet Chilli, Garlic, Tomato, or Pesto) and 1 Dipping Sauce
          (Choose from: BBQ, Sweet Chilli, Garlic, Tomato, or Pesto)
        </p>
      </div>
      <div className='flex justify-between items-center h-full p-4'>
        <p className='text-white text-lg font-semibold'>$19.99</p>
        <Button
          className='bg-transparent text-primary text-base hover:bg-transparent hover:scale-[1.02]  px-6 py-3 hover:text-sp_orange transition-all duration-300    
    '
        >
          Order Now
        </Button>
      </div>
    </Card>
  );
};

export default DealCard;
