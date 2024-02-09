import React from 'react';
import MenuCard from './MenuCard';

const MenuList = ({ menuList }) => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-6 p-10'>
      {menuList.map((menuItem, index) => {
        return <MenuCard key={index} menuItem={menuItem} />;
      })}
    </div>
  );
};

export default MenuList;
