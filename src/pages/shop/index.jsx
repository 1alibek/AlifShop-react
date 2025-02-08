import React, { useContext } from "react";
import { BasketContext } from "../../context/basketContext";
import Header from "../../components/header";
import ShopTop from "../../components/shopTop";

import { RiDeleteBin6Line } from "react-icons/ri";
import ShopTotalPrice from "../../components/shopTotalPrice";

const Basket = () => {
  const { dispatch, state } = useContext(BasketContext);

  return (
    <div className="w-[90%] m-auto min-[14400px]:w-[1440px]">
      <Header />
      <ShopTop />
      <div>
        {!state?.shop?.length && (
          <div className="text-center text-2xl">Savatchangiz bo'sh</div>
        )}
      </div>
      <div className="gridBox">
        <div className="w-full">
          {state.shop.map((value) => {
            return (
              <div
                key={value?.id}
                className="flex items-start border-b-2 border-gray-200 gap-4 mt-5"
              >
                <div className="relative">
                  <img
                    className="w-25 h-25 mx-auto object-cover"
                    src={value?.img}
                    alt={value?.title}
                  />
                </div>

                <div className="mt-4 flex flex-col w-full">
                  <p className="text-black text-md mb-2 font-medium">
                    {value?.description}
                  </p>

                  <p className="text-[12px] text-[#a5b1bb]">
                    Narx:{" "}
                    <span className="text-[#5d6d7d]">{value?.price3}</span> so'm
                  </p>
                  <p className="text-[12px] text-[#5d6d7d]">
                    Toshkent bo'ylab 1 kundan boshlab. O' zbekiston bo'ylab 3
                    kundan boshlab
                  </p>
                  <div className="flex items-center justify-between w-full py-4">
                    <div className="bg-gray-100 rounded-lg w-[150px] flex justify-around items-center">
                      <button
                        onClick={() =>
                          dispatch({ type: "decrement", productId: value.id })
                        }
                        className="border-0 p-1"
                        disabled={value.counter === 1}
                      >
                        -
                      </button>

                      <span className="mx-2 font-medium">{value.counter}</span>

                      <button
                        onClick={() =>
                          dispatch({ type: "increment", productId: value.id })
                        }
                        className="border-0"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        dispatch({ type: "delete", deleteId: value?.id });
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md"
                    >
                      <RiDeleteBin6Line />
                      O'chirish
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <ShopTotalPrice />
      </div>
    </div>
  );
};

export default Basket;
