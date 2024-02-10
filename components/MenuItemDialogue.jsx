import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { MinusIcon, PlusIcon } from 'lucide-react';

const MenuItemDialogue = ({ menuItem }) => {
  return (
    <Dialog className=''>
      <DialogTrigger>
        <h1 className='text-sp_orange text-base font-base tracking-wider'>
          View
        </h1>
      </DialogTrigger>
      <DialogContent className=' w-[90vw] bg-zinc-900 border-none text-white  p-0 rounded-lg xl:rounded-lg'>
        <DialogHeader>
          <Image
            src={menuItem.image}
            width={450}
            height={250}
            className='object-cover object-center rounded-t-lg h-[350px] w-full'
            alt='project image'
            priority
          />
        </DialogHeader>
        <div className='px-4 flex flex-col gap-y-2'>
          {' '}
          <DialogTitle className='text-4xl'>{menuItem.title}</DialogTitle>
          <DialogDescription>
            <p className='text-base py-2'>{menuItem.description}</p>
            <div>
              <p className='text-white text-lg font-semibold tracking-wider'>
                {menuItem.price}$
              </p>
            </div>
          </DialogDescription>
          <div>
            <div className='flex flex-col gap-y-4 py-2'>
              <div className='flex  items-center'>
                <h1 className='text-white text-lg font-semibold tracking-wider'>
                  Quantity
                </h1>
                <Button
                  className='bg-transparent text-primary text-3xl hover:bg-transparent hover:scale-[1.02]hover:text-sp_orange transition-all duration-300'
                  onClick={() => console.log('clicked')}
                >
                  <MinusIcon size={24} />
                </Button>

                <p
                  className='text-white text-lg font-semibold tracking-wider border-2 border-zinc-600 px-2 
                rounded-[5px] w-10 text-center
                '
                >
                  1
                </p>
                <Button
                  className='bg-transparent text-primary text-3xl hover:bg-transparent hover:scale-[1.02]  hover:text-sp_orange transition-all duration-300'
                  onClick={() => console.log('clicked')}
                >
                  <PlusIcon size={24} />
                </Button>
              </div>
              <div className='flex gap-x-4'>
                <Select>
                  <SelectTrigger className='w-[170px] bg-zinc-900 border-2 '>
                    <SelectValue placeholder='Select Serving Size' />
                  </SelectTrigger>
                  <SelectContent className='bg-zinc-900 text-white'>
                    <SelectItem value='light'>Small</SelectItem>
                    <SelectItem value='dark'>Large</SelectItem>
                    <SelectItem value='system'>X-Large</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder='Special Instructions'
                  className='bg-zinc-900 border-2'
                />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className='flex justify-around px-4'>
          <div className='flex gap-x-4 items-center py-2 justify-end '>
            <Button className='bg-transparent text-sp_orange text-base hover:bg-transparent'>
              Cancel
            </Button>
            <Button className='text-primary bg-transparent text-base font-semibold hover:bg-transparent hover:text-white transition-all duration-500'>
              Add to Cart
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MenuItemDialogue;
