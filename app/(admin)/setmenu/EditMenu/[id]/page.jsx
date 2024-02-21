import React from 'react';
import EditItemsForm from '@/components/admin/editItemsForm';
import ConnectMongoDB from '@/lib/MongoDB';
import MenuItem from '@/models/MenuItems';
const fetchMenuItem = async (id) => {
  if (id) {
    try {
      await ConnectMongoDB();
      const menuItems = await MenuItem.findById(id);

      return JSON.stringify(menuItems);
    } catch (error) {
      console.error('Error loading item:', error);
    }
  }
};
const EditMenu = async ({ params }) => {
  const { id } = params;
  const menuItem = await fetchMenuItem(id);
  const parsedMenuItem = JSON.parse(menuItem);
  return (
    <div className='flex justify-center items-center bg-zinc-800 w-full py-4'>
      <EditItemsForm MenuItem={parsedMenuItem} />
    </div>
  );
};
export default EditMenu;
