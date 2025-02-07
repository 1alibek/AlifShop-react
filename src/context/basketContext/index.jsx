import { createContext, useEffect, useState } from "react";

const BasketContext = createContext();
const BasketContextProvider = ({ children }) => {
    let storage=localStorage.getItem('basket')
  const [store, setStore] = useState(JSON.parse(storage) || []);

  const setBasket = (data) => {
    setStore([...store, data]);
  };
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(store));
  }, [store]);
  return (
    <BasketContext.Provider value={{ setBasket, store, setStore }}>
      {children}
    </BasketContext.Provider>
  );
};
export { BasketContext, BasketContextProvider };