'use client';
import AddItemsForm from '@/components/admin/addItemsForm';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddItems = () => {

  return (
   <div className='flex justify-center items-center bg-zinc-800 w-full py-4'>
    <AddItemsForm />
   </div>
  );
};

export default AddItems;
