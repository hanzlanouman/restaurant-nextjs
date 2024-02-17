'use client';
import EditItemsForm from '@/components/admin/editItemsForm'
import { get } from 'http';
import { set } from 'mongoose';
import React from 'react'
import { useState, useEffect } from 'react';
import getItemByID from '@/components/admin/getItemsByID';
const EditMenu = ({params}) => {

  const [MenuItem, setMenuItems] = useState([]);
  const {id} = params;

useEffect(() => {
  getItemByID(id, setMenuItems);
}, [id]);

 const {title, description, price, image} = MenuItem;
    return (
    <div className='flex justify-center items-center bg-zinc-800 w-full py-4'>
    <EditItemsForm title={title} description={description} price={price} image={image}
    />
    </div>
  )
}

export default EditMenu