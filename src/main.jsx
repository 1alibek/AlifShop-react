import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/index.css";
import { RouterProvider } from "react-router-dom";
import { root } from "./router";
import { ProductContextProvider } from "./context/productContext";
import { BasketContextProvider } from "./context/basketContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductContextProvider>
      <BasketContextProvider>
        <RouterProvider router={root} />
      </BasketContextProvider>
    </ProductContextProvider>
  </StrictMode>
);
