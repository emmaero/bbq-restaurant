import React from "react";
import { Link } from "react-router-dom";
import { iCategory } from "../../interfaces/interfaces";
interface iProp {
  item: iCategory;
}
export default function CategoryCard({ item }: iProp) {
  const { id, name, imageURL, description } = item;
  return (
    <li>
      <div className="card">
        <img src={imageURL} alt="" />
        <div>
          <div className="card-info">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
          <div className="view-page">
            <Link to={`/edit-category/${id}`}>
              <button className="button-link">Edit Category</button>
            </Link>
            <Link to={`/add-product/${id}`}>
              <button className="button-link">Add Prouct</button>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
