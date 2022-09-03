import React from "react";
import "./category_preview.scss";
import ProdacutCard from "../product-card/Prodacut-card";
import { Link } from "react-router-dom";

const Category_Preview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={`/shop/${title}`}>
          <span className="title">{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProdacutCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category_Preview;
