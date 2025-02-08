import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/productContext";
import axios from "axios";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BasketContext } from "../../context/basketContext";

const Products = () => {
  const { data, setData } = useContext(ProductContext);
const {dispatch}=useContext(BasketContext)

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/product`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-5 py-8 gap-4">
      {data.map((value) => (
        <div
          key={value.id}
          className="border rounded-2xl p-4 shadow-lg bg-white w-64"
        >
          <div className="relative">
            <img
              className="w-40 h-40 mx-auto object-cover"
              src={value.img}
              alt={value.title}
            />
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <p className="text-gray-700 text-sm mb-2 font-medium">
              {value.title}
            </p>
            <p className="bg-orange-200 rounded-full p-1 text-sm font-normal pl-4">
              dan <span className="font-semibold">{value.price1}</span>{" "}
              so'm/oyga
            </p>
            <p className="line-through text-gray-500 text-sm">
              {value.price2} so'm
            </p>
            <p className="text-red-500 text-lg font-normal">
              {value.price3} so'm
            </p>
          </div>
          <button
            onClick={() => dispatch({type:"add",product:value})}
            className="w-full bg-yellow-400 text-black font-semibold py-2 mt-4 rounded-lg flex items-center gap-4 justify-center hover:bg-yellow-500 transition"
          >
            <MdOutlineShoppingCart className="text-black text-2xl" /> Savatga
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
