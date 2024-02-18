import MenuList from '@/components/MenuList';
import SetMenu from '@/components/admin/SetMenu';
import React from 'react';
const fetchMenuItems = async () => {
  try {
    const res = await fetch('/apis/MenuItems', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-cache',
    });
    console.log('Response status:', res.status); // Log the response status
    const data = await res.json();
    console.log('Response data:', data); // Log the response data
  } catch (error) {
    console.error('Error loading items:', error);
  }
};
const page = async () => {
  const MenuItems = await fetchMenuItems();
  return (
    <div>
      <SetMenu MenuItems={MenuItems} />
      <MenuList MenuItems={MenuItems} />
    </div>
  );
};

export default page;
