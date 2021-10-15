import React from "react";
import { Link } from "react-router-dom";
import { iProduct } from "../../interfaces/interfaces";
interface iProps {
  item: iProduct;
  categoryId: string;
  onDelete: Function;
}
export default function ProductAdminCard({
  item,
  categoryId,
  onDelete,
}: iProps) {
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
          <div className="card-buttons">
            <button onClick={() => onDelete(id)} className="button-link">
              delete
            </button>
            <Link to={`/edit-product/${categoryId}/${id}`}>
              <button className="button-link">Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
