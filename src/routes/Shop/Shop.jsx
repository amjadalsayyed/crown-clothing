import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";
import ProdacutCard from "../../component/product-card/Prodacut-card";
import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProdacutCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
