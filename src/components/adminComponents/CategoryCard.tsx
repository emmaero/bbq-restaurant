import React from "react";
import { Link } from "react-router-dom";
import { iCategory } from "../../interfaces/interfaces";
import { deleteDocument } from "../../scripts/firestore";
interface iProp {
  item: iCategory;
}
export default function CategoryCard({ item }: iProp) {
  const { id, name, imageURL, description } = item;
  function onDelete(id: string) {

    var choice = window.confirm(`Delete ${name}!`);
    if (choice === true) {
      deleteDocument("category", id);
      alert(`${name} has been deleted`);
    } 
  }
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
              <button onClick={()=>onDelete(id)} className="button-link">Delete</button>
            <Link to={`/edit-category/${id}`}>
              <button className="button-link">Edit</button>
            </Link>
            <Link to={`/add-product/${id}`}>
              <button className="button-link">Add products</button>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
