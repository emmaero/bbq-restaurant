import React from 'react'
import { iProduct } from '../../../interfaces/interfaces';
interface iProps {
  item: object;

}
export default function ProductDetail({ item}: iProps) {
  const { id, name, productImageUrl, longDescription, ingredients } = item as iProduct;
    return (<div className="container user-page">
    <div className="page-image">
      <img src={productImageUrl} alt="bbq" />
    </div>
    <div className="page-details">
      <h2>{name}</h2>
      <p>{longDescription}</p>
      <h2>Ingredients</h2>
      {ingredients.map((item, index) => (
        <span>{item}</span>
      ))}
    </div>
  </div>);
}
