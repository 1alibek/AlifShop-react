import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Basket from "../pages/shop";

export const root = createBrowserRouter([
  {
    path: "/",
    element:<Home />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
]);
