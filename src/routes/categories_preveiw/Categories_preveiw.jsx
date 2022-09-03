import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import Category_Preveiw from "../../component/category-preveiw/Category_Preveiw";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <Category_Preveiw key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
