import React, { useContext } from "react";
import { BasketContext } from "../../context/basketContext";

const ShopTotalPrice = () => {
  const { state } = useContext(BasketContext);
  return (
    <div>
      {state.shop.length !== 0 ? (
        <div className="rounded-lg bg-gray-100 px-4 py-5 col-span-1">
          <div className="grid grid-cols-2">
            <p className="col-span-1 pr-4 font-medium text-xl">Jami</p>
            <p className="col-span-1 pr-4 font-medium text-xl">so'm</p>
          </div>
          <div className="mt-3 border-b-2 border-gray-300 pb-4">
            <div className="grid grid-cols-2">
              <p className="text-gray-400">Tovarlar soni</p>
              <p className="text-gray-500">{state.shop.length} dona</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="text-gray-400">Yetkazib berish</p>
              <p className=" text-green-500">Bepul</p>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-md font-medium text-green-500">
              Bepul yetkazib berish
            </p>
            <p className="text-sm text-gray-300">
              Yetkazib berish: Toshkent bo'ylab 24 soat ichida, Respublika
              bo'ylab 3 kungacha
            </p>
          </div>
          <button className="transition mt-3 duration-200 rounded-lg   flex items-center justify-center gap-2  font-medium bg-[#ffbe1f]  px-5 py-4 w-full">
            Muddatli To'lovga olish
          </button>
          <button className="transition mt-3 duration-200 rounded-lg   flex items-center justify-center gap-2 border-2 border-gray-300  font-medium bg-[white]  px-5 py-4 w-full">
            Karta orqali sotib olish
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ShopTotalPrice;
