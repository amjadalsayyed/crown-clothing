import "./directory-item.styles.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(`/shop/${title}`);
  return (
    <div className="directory-container" onClick={onNavigateHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
      ;
    </div>
  );
};

export default DirectoryItem;
