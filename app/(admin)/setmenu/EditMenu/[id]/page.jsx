import React from 'react';
import EditItemsForm from '@/components/admin/EditItemsForm';

const fetchMenuItem = async (id) => {
  if (id) {
    try {
      const res = await fetch(`/apis/MenuItems/${id}`, {
        cache: 'no-cache',
      });
      if (!res.ok) {
        throw new Error('Failed to fetch item');
      }
      return await res.json();
    } catch (error) {
      console.error('Error loading item:', error);
    }
  }
};
const EditMenu = async ({params}) => {
  const {id} = params;
  const menuItem = await fetchMenuItem(id);
  console.log('Menu Item', menuItem);
  return (
    <div className='flex justify-center items-center bg-zinc-800 w-full py-4'>
        <EditItemsForm
         MenuItem={menuItem}
        />

    </div>
  );
};
export default EditMenu;
