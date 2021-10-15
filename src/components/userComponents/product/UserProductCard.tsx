import React from "react";
import { Link } from "react-router-dom";
import { iProduct } from "../../../interfaces/interfaces";
interface iProps {
  product: iProduct;
  categoryId: string;
}
export default function UserProductCard({ product, categoryId }: iProps) {
  const { id, name, productImageUrl, description } = product;
  return (
    <li>
      <div className="product-card">
        <img src={productImageUrl} alt="" />
        <div>
          <div className="product-card-info">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
          <div className="view-page">
            <Link to={`/product/${categoryId}/${id}`}>
              <button className="button-link">View page</button>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
