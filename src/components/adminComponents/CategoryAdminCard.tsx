import React from "react";
import { Link } from "react-router-dom";
import { iCategory } from "../../interfaces/interfaces";
import { deleteDocument } from "../../scripts/firestore";
import { useCategory } from "../../states/CategoryProvider";
interface iProp {
  item: iCategory;
}
export default function CategoryAdminCard({ item }: iProp) {
  const { id, name, imageURL } = item;
  const { dispatch } = useCategory();
  async function onDelete(id: string) {
    var choice = window.confirm(`Delete ${name}!`);
    if (choice === true) {
      await deleteDocument("category", id);
      alert(`${name} has been deleted`);
      dispatch({ type: "DELETE_CATEGORIES", id: id });
    }
  }
  return (
    <li>
      <div className="card">
        <img src={imageURL} alt="" />
        <div>
          <div className="card-info">
            <h3>{name}</h3>
          </div>
          <div className="card-buttons">
            <button onClick={() => onDelete(id)} className="button-link">
              Delete
            </button>
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
