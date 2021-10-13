import React from 'react'
import { Link } from 'react-router-dom';
import { iProduct } from '../../interfaces/interfaces';
interface iProps{
  item: iProduct;
}
export default function ProductCard({ item }: iProps) {

  const { name, productImageUrl, longDescription, description,  ingredients } = item;
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
              <Link to={`/`}>
                <button className="button-link">View page</button>
              </Link>
            </div>
          </div>
        </div>
      </li>
    );
}
