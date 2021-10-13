import React from "react";
import { Link } from "react-router-dom";
import { iProduct } from "../../../interfaces/interfaces";
type PropParams = {
  categoryId: string;
};
interface iProps{
    product: iProduct;
}
export default function ProductCard({ product }:iProps) {
    const { name, productImageUrl, longDescription, description, ingredients } = product;
  return (
    <li>
      <div className="product-card">
        <img src={require("../../assets/images" + productImageUrl).default} alt="" />
        <div>
          <div className="product-card-info">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
          <div className="view-page">
            <Link to={"`/product/${categoryId}/${id}`"}>
              <button className="button-link">View page</button>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
