import React from 'react';
import EditItemsForm from '@/components/admin/EditItemsForm';
import ConnectMongoDB from '@/lib/MongoDB';
import MenuItem from '@/models/MenuItems';
const fetchMenuItem = async (id) => {
  if (id) {
    try {
      await ConnectMongoDB();
      const menuItems = await MenuItem.findById(id);
      console.log(menuItems);
      return menuItems;
    } catch (error) {
      console.error('Error loading item:', error);
    }
  }
};
const EditMenu = async ({ params }) => {
  const { id } = params;
  const menuItem = await fetchMenuItem(id);
  console.log('Menu Item', menuItem);
  return (
    <div className='flex justify-center items-center bg-zinc-800 w-full py-4'>
      <EditItemsForm MenuItem={menuItem} />
    </div>
  );
};
export default EditMenu;
