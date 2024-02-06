'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Delete, Trash, X } from 'lucide-react';
import { ScrollArea, ScrollBar } from './ui/scroll-area';

const CartItems = ({ cart }) => {
  const [cartItems, setCartItems] = useState(cart);
  return cartItems.length > 0 ? (
    <ScrollArea
      hideScrollbar={true}
      className='h-[500px] px-0 mx-auto'
      // dont show the scrollbar
    >
      {cartItems.length !== 0 && (
        <div
          className='
            flex
        w-full
        gap-x-4
        px-4
        justify-end
        items-center
        text-right
        
        '
        >
          <Button
            className='flex items-center gap-x-2 text-red-500 text-base font-semibold bg-transparent hover:bg-transparent hover:text-red-400'
            onClick={() => {
              setCartItems([]);
            }}
          >
            Clear Cart
          </Button>
        </div>
      )}
      <div
        className='
    flex
    flex-col
    gap-y-8
    overflow-y-auto
    w-[100%]
    h-full
    scrollbar-thin flex-grow
    '
        onScroll={(e) => {
          console.log(e.target.scrollTop);
        }}
      >
        {cartItems.map((item, index) => {
          return (
            <div
              key={index}
              className='
            border-b
            border-orange-500
            border-opacity-40
            flex
            flex-col
            gap-y-4
            items-center
          '
            >
              <div
                className='
        flex
        items-center
        gap-x-12
        justify-between
        w-full
        mb-3
        '
              >
                <div
                  className='flex gap-x-4 items-center
        justify-between
        w-full pr-4
        
        '
                >
                  <Image
                    src={item.img}
                    alt={item.item}
                    width={60}
                    height={60}
                    className='object-contain rounded-full'
                  />
                  <div
                    className='
            flex
            flex-col
            gap-y-2
            items-start
            justify-center
            w-full
            '
                  >
                    <h3 className='text-base font-bold'>{item.item}</h3>
                    <p className='text-sm text-gray-400'>${item.price}</p>
                  </div>
                </div>
                <div
                  className='flex
        items-center
        gap-x-4
        justify-end
        w-full
              '
                >
                  <div className='flex gap-x-1 items-center'>
                    <Button
                      className='py-0 px-2 bg-transparent text-primary font-semibold text-lg rounded-full  hover:bg-transparent'
                      onClick={() => {
                        // write the complete decrease function but it should not go below 1
                        if (item.quantity > 1) {
                          setCartItems((prev) => {
                            return prev.map((cartItem) => {
                              if (cartItem.item === item.item) {
                                return {
                                  ...cartItem,
                                  quantity: cartItem.quantity - 1,
                                };
                              }
                              return cartItem;
                            });
                          });
                        }
                      }}
                    >
                      &#8722;
                    </Button>
                    <p
                      className='text-base font-bold text-center
                '
                    >
                      {item.quantity}
                    </p>
                    <Button
                      className='py-0 px-2  bg-transparent text-primary font-semibold text-lg rounded-full
                        hover:bg-transparent
                    '
                      onClick={() => {
                        setCartItems((prev) => {
                          return prev.map((cartItem) => {
                            if (cartItem.item === item.item) {
                              return {
                                ...cartItem,
                                quantity: cartItem.quantity + 1,
                              };
                            }
                            return cartItem;
                          });
                        });
                      }}
                    >
                      &#43;
                    </Button>
                  </div>
                  <div
                    className='flex
            justify-end
            gap-x-4
            w-full

                '
                  >
                    <Button
                      className='
                bg-transparent
                text-gray-400
                font-semibold
                rounded-full
                hover:bg-transparent
                p-0
                '
                      onClick={() => {
                        setCartItems((prev) => {
                          return prev.filter(
                            (cartItem) => cartItem.item !== item.item
                          );
                        });
                      }}
                    >
                      <Trash className='text-lg cursor-pointer' size={24} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ScrollBar orientation='some' />
    </ScrollArea>
  ) : (
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
      <p className='text-gray-400 text-center'>Your cart is empty</p>
    </div>
  );
};

export default CartItems;
