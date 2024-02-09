'use client';
import Image from 'next/image';
import { Card, CardHeader } from '@/components/ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Heart, ShoppingCart, ShoppingCartIcon } from 'lucide-react';
import { useState } from 'react';
import {
  RiHeart2Fill,
  RiHeart2Line,
  RiShoppingCart2Line,
} from 'react-icons/ri';

const MenuCard = ({ menuItem }) => {
  const [craving, setCraving] = useState(false);
  const addToCart = (item) => {
    console.log(item);
  };
  return (
    <Card className='border-none bg-zinc-900 shadow-2xl shadow-zinc-800'>
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
            src={menuItem.image}
            width={850}
            height={350}
            alt='project image'
            priority
          />
        </div>
      </CardHeader>
      <div className=' p-4 flex flex-col items-stretch  justify-between'>
        <Badge className='uppercase text-xs font-medium mb-2 absolute top-2 left-2'>
          40% off
        </Badge>
        <div className='flex items-start justify-between'>
          <h4 className='h4 text-white text-lg mb-3 '>{menuItem.title}</h4>
          {craving ? (
            <RiHeart2Fill
              className='text-sp_orange cursor-pointer'
              size={24}
              onClick={() => setCraving(false)}
            />
          ) : (
            <RiHeart2Line
              className='text-sp_orange cursor-pointer'
              size={24}
              onClick={() => setCraving(true)}
            />
          )}
        </div>

        <p
          className='text-white text-base 
          line-clamp-3
        '
        >
          {menuItem.description}
        </p>
      </div>

      <div className='flex justify-between items-center p-4 '>
        <p className='text-white text-lg font-semibold tracking-wider'>
          {menuItem.price}$
        </p>

        {/* <Button>Add to Cart</Button> */}
        <RiShoppingCart2Line
          size={28}
          className='text-primary cursor-pointer'
          onClick={() => addToCart(menuItem)}
        />
      </div>
    </Card>
  );
};

export default MenuCard;
