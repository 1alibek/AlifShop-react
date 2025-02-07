import { createContext, useState } from "react";

const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  return (
    <ProductContext.Provider value={{ data, setData }}>
      {children}
    </ProductContext.Provider>
  );
};
export { ProductContext, ProductContextProvider };
