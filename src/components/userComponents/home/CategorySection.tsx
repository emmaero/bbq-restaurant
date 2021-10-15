import React from "react";
import { Link } from "react-router-dom";
import { iCategory } from "../../../interfaces/interfaces";
interface iProps {
  item: iCategory;
}
export default function CategorySection({ item }: iProps) {
  const { id, name, imageURL, description } = item;
  return (
    <div className="category-section">
      <img src={imageURL} alt="bbq halmstad" />
      <div className="section-description">
        <div className="container-inner">
          <h2>{name}</h2>
          <p>{description}</p>

          <Link to={`/products/${id}`}>
            <button className="button-main">View menu</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
