import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/index.css";
import { RouterProvider } from "react-router-dom";
import { root } from "./router";
import { ProductContextProvider } from "./context/productContext";
import { BasketContextProvider } from "./context/basketContext";
import { CountContextProvider } from "./context/countContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductContextProvider>
      <BasketContextProvider>
        <CountContextProvider>
          <RouterProvider router={root} />
        </CountContextProvider>
      </BasketContextProvider>
    </ProductContextProvider>
  </StrictMode>
);
