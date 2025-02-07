import React, { useContext } from 'react'
import { BasketContext } from '../../context/basketContext'
import Home from '../home';
import Header from '../../components/header';

const Basket = () => {
  const { store,setStore } = useContext(BasketContext)
  return (
    <div className='w-[90%] m-auto min-[14400px]:w-[1440px]'>

      <Header/>
      <div>
        {!store.length && (
          <div className="text-center text-2xl">Savatchangiz bo'sh</div>
        )}
      </div>
      <div>
           {store.map((value) => (
                <div
                  key={value?.id}
                  className="border rounded-2xl p-4 shadow-lg bg-white w-64"
                >
                  <div className="relative">
                    <img
                      className="w-40 h-40 mx-auto object-cover"
                      src={value?.img}
                      alt={value?.title}
                    />
                  </div>
                  <div className="mt-4 flex flex-col gap-1">
                    <p className="text-gray-700 text-sm mb-2 font-medium">{value?.title}</p>
                    <p className="bg-orange-200 rounded-full p-1 text-sm font-normal pl-4">
                      dan <span className="font-semibold">{value?.price1}</span> so'm/oyga
                    </p>
                    <p className="line-through text-gray-500 text-sm">
                      {value?.price2} so'm
                    </p>
                    <p className="text-red-500 text-lg font-normal">
                      {value?.price3} so'm
                    </p>
                  </div>
                
                </div>
              ))}
      </div>
    </div>
  );
}

export default Basket