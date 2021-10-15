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
        {productImageUrl === "" ? (
          <img src={require("../../assets/images/placeholder.png")} alt="" />
        ) : (
          <img src={productImageUrl} alt="" />
        )}
        <div>
          <div>
            <h3>{name}</h3>
            <div className="card-info">{description}</div>
          </div>
          <div className="card-buttons">
            <button onClick={() => onDelete(id)} className="button-link">
              Delete
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
