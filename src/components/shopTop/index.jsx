import React, { useContext } from 'react'
import { BasketContext } from '../../context/basketContext';

const ShopTop = () => {
  const {state}=useContext(BasketContext)
  return (
    <div className='flex items-end gap-6 pl-[70px]'>
      <p className="text-3xl font-medium">Savat</p>
      <p className='text-gray-300 '>{state.shop.length} tovarlar</p>
    </div>
  );
}

export default ShopTop