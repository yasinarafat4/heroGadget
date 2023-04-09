import React, { createContext, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {
  const { cartArray, products } = useLoaderData();
  const [cart, setCart] = useState(cartArray);
  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <div className="min-h-[calc(100vh-137px)]">
          <Outlet />
        </div>
        <Footer />
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
