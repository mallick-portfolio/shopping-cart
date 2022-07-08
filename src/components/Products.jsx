import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.js";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-5">
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  );
};

export default Products;
