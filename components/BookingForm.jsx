'use client';

import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const bookingSchema = z.object({
  // name: z.string().min(3).max(50),
  // email: z.string().email(),
  // date: z.date(),
  // time: z.string(),
  // guests: z.number().int().positive(),
});
const BookingForm = () => {
  const form = useForm({
    resolver: zodResolver(bookingSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4 text-white flex justify-center flex-col  w-full xl:min-w-[500px] min-w-[97.5vw] md:min-w-[400px] xl:items-start'
      >
        <div className='flex flex-col space-y-4 w-full  xl:max-w-[450px] rounded-xl bg-zinc-800 p-8 shadow-2xl '>
          <div className='flex flex-col space-y-4'>
            <h1 className='text-4xl font-semibold text-primary text-center xl:text-left md:text-left'>
              Book Now <span className='text-sp_orange'>!</span>
            </h1>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Your Name'
                      {...field}
                      className='text-white bg-zinc-900 '
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Email'
                      {...field}
                      className='text-white bg-zinc-900 '
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='date'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Pick a Date'
                      {...field}
                      className='text-white bg-zinc-900 '
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='time'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className='w-full bg-zinc-900'>
                        <SelectValue placeholder='Select a Meal' />
                      </SelectTrigger>
                      <SelectContent className='bg-zinc-900 text-white'>
                        <SelectItem value='light'>Breakfast</SelectItem>
                        <SelectItem value='dark'>Lunch</SelectItem>
                        <SelectItem value='system'>Dinner</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='guests'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Guests</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Number of Guests'
                      {...field}
                      className='text-white bg-zinc-900 '
                    />
                  </FormControl>
                  <FormDescription className='ml-1'>
                    Max 10 guests
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex justify-end items-end'>
            <Button
              type='submit'
              className='min-w-[120px] text-base bg-transparent border-2 border-primary hover:bg-primary hover:text-zinc-white hover:border-transparent'
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default BookingForm;
