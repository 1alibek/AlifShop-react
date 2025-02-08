import { createContext, useReducer } from "react";

const BasketContext = createContext();
const BasketContextProvider = ({ children }) => {
  const initialState = {
    shop: JSON.parse(localStorage.getItem("shop")) || [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        if (state.shop.find((value) => value.id === action.product.id)) {
          let newData = state.shop.map((value) =>
            value.id === action.product.id
              ? { ...value, counter: value.counter + 1 }
              : value
          );
          localStorage.setItem("shop", JSON.stringify(newData));
          return { ...state, shop: newData };
        }
        let newData = {
          ...state,
          shop: [...state.shop, { ...action.product, counter: 1 }],
        };
        localStorage.setItem("shop", JSON.stringify(newData.shop));
        return newData;

      case "delete":
        let deleteData = state.shop.filter(
          (value) => value.id !== action.deleteId
        );
        localStorage.setItem("shop", JSON.stringify(deleteData));
        return { ...state, shop: deleteData };

      case "increment":
        let incData = state.shop.map((value) =>
          value.id === action.productId
            ? { ...value, counter: value.counter + 1 }
            : value
        );
        localStorage.setItem("shop", JSON.stringify(incData));
        return { ...state, shop: incData };

      case "decrement":
        let decData = state.shop.map((value) =>
          value.id === action.productId && value.counter > 1
            ? { ...value, counter: value.counter - 1 }
            : value
        );
        localStorage.setItem("shop", JSON.stringify(decData));
        return { ...state, shop: decData };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BasketContext.Provider value={{ state, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
};

export { BasketContext, BasketContextProvider };
