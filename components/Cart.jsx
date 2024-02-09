import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ShoppingBag, X } from 'lucide-react';

import Logo from './Logo';
import CartItems from './CartItems';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

const cartItems = [
  {
    item: 'Burger',
    price: 12,
    img: '/images/burger.jpg',
    quantity: 2,
  },
  {
    item: 'Salad',
    price: 12,
    img: '/images/salad.jpg',
    quantity: 2,
  },
  {
    item: 'Pizza',
    price: 12,
    img: '/images/piza.avif',
    quantity: 3,
  },
  {
    item: 'Sushi',
    price: 12,
    img: '/images/sushi.jpg',
    quantity: 2,
  },
  {
    item: 'Pasta',
    price: 12,
    img: '/images/sushi.jpg',
    quantity: 9,
  },
  {
    item: 'Pasta',
    price: 12,
    img: '/images/sushi.jpg',
    quantity: 9,
  },
  {
    item: 'Pasta',
    price: 12,
    img: '/images/sushi.jpg',
    quantity: 9,
  },
  {
    item: 'Pasta',
    price: 12,
    img: '/images/sushi.jpg',
    quantity: 9,
  },
  {
    item: 'Pasta',
    price: 12,
    img: '/images/sushi.jpg',
    quantity: 9,
  },
  {
    item: 'Pasta',
    price: 12,
    img: '/images/sushi.jpg',
    quantity: 9,
  },
  {
    item: 'Pasta',
    price: 12,
    img: '/images/sushi.jpg',
    quantity: 9,
  },
  {
    item: 'Pasta',
    price: 12,
    img: '/images/sushi.jpg',
    quantity: 9,
  },
];

const Cart = ({ isPage }) => {
  const path = usePathname();
  return (
    <div>
      <Sheet
        className='
        w-full
        h-full
        container
       
        '
      >
        <SheetTrigger asChild>
          <ShoppingBag className={`cursor-pointer`} size={30} />
        </SheetTrigger>
        <SheetContent side={isPage ? 'right' : 'left'} className=''>
          <div className='flex flex-col items-center justify-between h-full py-8 '>
            <div className='text-orange-600 flex flex-col items-center gap-y-5'>
              <Logo />
              {/* Cart Items */}
              <div
                className='
                flex
                flex-col 
                gap-y-4
                items-center
                justify-center
                w-full  
                
              '
              >
                <h2 className='text-2xl font-bold text-center'>Your Cart</h2>
                <div
                  className='
                    flex
                    flex-col
                    gap-y-4
                    items-center
                    justify-center
                    w-full
                    '
                  // scrollable
                >
                  <CartItems cart={cartItems} />
                </div>
              </div>
              {/* Checkout, Close */}
              <div
                className='
                flex
                gap-x-4
                items-center
                justify-center
                w-full

              '
              >
                <Button
                  className='
                  bg-red-600
                    text-white
                  py-2
                  hover:bg-red-400
                  max-w-[110px]
                  rounded-none
                  xl:min-w-[150px]
                  transition-all
                  '
                >
                  <X className='text-lg cursor-pointer mr-1' size={22} />
                  Close
                </Button>
                <Button
                  className='
                  bg-primary
                  text-white
                  py-2
                  max-w-[110px]
                    rounded-none
                  transition-all
                  xl:min-w-[150px]
                  '
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cart;
