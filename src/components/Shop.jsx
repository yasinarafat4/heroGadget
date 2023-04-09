import React, { useContext } from "react";
import ProductCard from "./Cards/ProductCard";
import { addToDb } from "../utilities/fakeDB";
import { ProductContext } from "../App";

const Shop = () => {
  // const productsData = useLoaderData();

  const products = useContext(ProductContext);
  console.log(products);

  // Card button handler
  const handleAddToCart = (id) => {
    console.log(id);
    addToDb(id);
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default Shop;
