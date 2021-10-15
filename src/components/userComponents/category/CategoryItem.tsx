import React from 'react'
import { Link } from 'react-router-dom';
import { iCategory } from '../../../interfaces/interfaces';
interface iProps {
  item: iCategory;
}
export default function CategoryItem ({ item }: iProps) {
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
            <div className="card-buttons">
 
              <Link to={`/products/${id}`}>
                <button className="button-link">View products</button>
              </Link>
            </div>
          </div>
        </div>
      </li>
    );
}
