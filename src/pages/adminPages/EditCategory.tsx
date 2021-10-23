import React from "react";
import { Link, useParams } from "react-router-dom";
import { iCategory, iProduct } from "../../interfaces/interfaces";
import { useHistory } from "react-router";
import { deleteDocument, updateDocument } from "../../scripts/firestore";
import { useCategory } from "../../states/CategoryProvider";
import EditCategoryForm from "../../components/adminComponents/EditCategoryForm";
import ProductAdminCard from "../../components/adminComponents/ProductAdminCard";
import useFetch from "../../customHooks/useFetch";
type PropParams = {
  categoryId: string;
};
export default function EditCategory() {
  const { categoryId } = useParams<PropParams>();
  const { categories, dispatch } = useCategory();
  const category = categories.find((item: iCategory) => item.id === categoryId);
  const path = `category/${categoryId}/products`;
  const { data, loading, error } = useFetch(path);

  let history = useHistory();
  
  async function onDelete(id: string) {
    var choice = window.confirm("Do you want to delet this product");
    if (choice === true) {
      await deleteDocument(path, id);
      alert("Product has been deleted");
    }
  }
  const productItems = data.map((item: iProduct) => (
    <ProductAdminCard
      key={item.id}
      item={item}
      categoryId={categoryId}
      onDelete={onDelete}
    />
  ));

  async function onUpdate(categoryUpdate: iCategory) {
    await updateDocument("category", categoryUpdate.id, categoryUpdate);
    dispatch({ type: "EDIT_CATEGORIES", payload: categoryUpdate });
  }

  return (
    <div className="admin-container">
      <EditCategoryForm item={category} onUpdate={onUpdate} />
      <Link to={`/add-product/${categoryId}`}>
        <button className="button-secondary">Add products</button>
      </Link>
      <button className="button-main" onClick={() => history.goBack()}>
        Go back
      </button>
      {loading && <p>Loading ⏱</p>}
      {data && <ul className="list row">{productItems}</ul>}
      {error === 2 && <p>Error</p>}
    </div>
  );
}
