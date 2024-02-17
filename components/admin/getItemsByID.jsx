'use server'
import React from 'react';

const getItemByID = async (id, setMenuItems) => {
    try {
      const res = await fetch(`http://localhost:3000/apis/MenuItems/${id}`, {
        cache: 'no-cache',
      });
      if (!res.ok) {
        throw new Error('Failed to fetch menu items');
      }
      const data = await res.json();
      setMenuItems(data);
    } catch (error) {
      console.error('Error loading items:', error);
    }
  };

  export default getItemByID;