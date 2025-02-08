import { createContext, useReducer } from "react";

// 1. Context yaratamiz
const CountContext = createContext();
const initialState = [
  { id: 1, counter: 0 },
  { id: 2, counter: 0 },
  { id: 3, counter: 0 },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, counter: item.counter + 1 }
          : item
      );

    case "decrement":
      return state.map((item) =>
        item.id === action.payload && item.counter > 0
          ? { ...item, counter: item.counter - 1 }
          : item
      );

    default:
      return state;
  }
};


// 4. Context Provider yaratamiz
const CountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};

export { CountContext, CountContextProvider };
