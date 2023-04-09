import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import productAndCartData from "./loaders/getCart&ProductData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: productAndCartData,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: () => fetch("products.json"),
      },
      {
        path: "/cart",
        element: <Cart />,
        loader: productAndCartData,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
