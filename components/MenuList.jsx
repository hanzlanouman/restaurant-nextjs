import React from 'react';
import MenuCard from './MenuCard';

const MenuList = ({ MenuItems = []}) => {

  return (
    <div className='grid grid-cols-1  xl:grid-cols-4 md:grid-cols-3 gap-6 py-10 px-2'>
      {MenuItems.map((menuItem, index) => {
        return <MenuCard key={index} menuItem={menuItem} />;
      })}
    </div>
  );
};

export default MenuList;
