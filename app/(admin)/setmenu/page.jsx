import SetMenu from '@/components/admin/SetMenu';
import React from 'react';
import ConnectMongoDB from '@/lib/MongoDB';
import MenuItem from '@/models/MenuItems';
const fetchMenuItems = async () => {
  try {
    await ConnectMongoDB();
    const MenuItems = await MenuItem.find({});
    console.log('API', MenuItems);
    return MenuItems;
  } catch (error) {
    console.error('Error loading items:', error);
  }
};
const SetMenuPage = async () => {
  const menuItems = await fetchMenuItems();
  console.log('Here');
  console.log(menuItems);
  return (
    <div className='bg-zinc-800 p-4 '>
      <h1 className='text-3xl font-bold text-white'>Set Menu</h1>
      <SetMenu MenuItems={menuItems} />
    </div>
  );
};

export default SetMenuPage;
