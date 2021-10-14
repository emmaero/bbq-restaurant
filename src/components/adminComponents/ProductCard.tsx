import React from "react";
import { Link } from "react-router-dom";
import { iProduct } from "../../interfaces/interfaces";
interface iProps {
  item: iProduct;
  categoryId: string;
}
export default function ProductCard({ item, categoryId }: iProps) {
  const { id, name, productImageUrl, description } = item;
  return (
    <li>
      <div className="card">
        <img src={productImageUrl} alt="" />
        <div>
          <div className="card-info">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
          <div className="view-page">
            <Link to={`/edit-product/${categoryId}/${id}`}>
              <button className="button-link">Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
