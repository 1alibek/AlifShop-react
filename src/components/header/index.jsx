import React, { useContext } from 'react'
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { BasketContext } from '../../context/basketContext';
import { IoIosMenu } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';

const Header = () => {
    const {state}=useContext(BasketContext)
  return (
    <div className="flex justify-between items-center py-3  mt-2">
      <Link to={"/"} className="flex items-center">
        <img
          className="w-[50px] h-[50px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_zoIcDueSKv5OFE0NVFseshYlDl1uMU7NSw&s"
          alt=""
        />
        <p className="font-bold text-xl">
          alif <span className="font-normal">shop</span>
        </p>
      </Link>
      <button className="flex items-center gap-1 px-3 py-2 bg-[#ffbe1f] text-black rounded-md font-medium">
        <IoIosMenu className="text-3xl" />
        Tovarlar katalogi
      </button>
      <div className="flex items-center w-[45%] justify-between border-2 border-[#ffbe1f] rounded-md text-grey-900 placeholder:text-grey-300">
        <input
          className="outline-none pl-2"
          type="text"
          placeholder="Tovarlarni izlash..."
        />
        <button className="bg-[#ffbe1f] px-4 h-full py-3">
          <CiSearch className="text-2xl font-medium text-bold" />
        </button>
      </div>

      <Link to={"/basket"} className="flex flex-col items-center gap-1">
        <div className="relative">
          <MdOutlineShoppingCart className="text-3xl" />
            {state.shop.length!==0?
          <p className="absolute top-[-12px] right-[-10px] bg-red-600 px-2 rounded-full text-white">
            {state.shop?.length}
          </p>:""}
        </div>
        <p className="font-medium">Savatcha</p>
      </Link>
      <div className="flex flex-col items-center gap-1">
        <FaRegHeart className="text-3xl" />

        <p className="font-medium">Saralanganlar</p>
      </div>
      <button className="px-3 py-2 rounded-lg text-gray-900 font-medium border-2 border-[#ffbe1f]">
        Kirish
      </button>
    </div>
  );
}

export default Header