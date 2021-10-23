import React from "react";
import { useHistory, useParams } from "react-router-dom";
import AddProductForm from "../../components/adminComponents/AddProductForm";
import { iCategory } from "../../interfaces/interfaces";
import { createDocument } from "../../scripts/firestore";
import { useCategory } from "../../states/CategoryProvider";
type PropParams = {
  categoryId: string;
};
export default function AddProduct() {
  let history = useHistory();
  const { categoryId } = useParams<PropParams>();
  const { categories } = useCategory();
  const category = categories.find((item: iCategory) => item.id === categoryId);

  // unused argment - 1
  function onAddProduct(product: object, categoryItem: iCategory) {
    createDocument(`category/${categoryId}/products`, product);

    // add a question mark to this confirm window. It shoudl be go back to previous page?
    var choice = window.confirm("Product added go back to previous page");
    if (choice === true) {
      history.goBack();
    }
  }

  return (
    <div className="admin-container">
      <h2>{`Add product to ${category.name}`}</h2>
      <AddProductForm item={category} onAddProduct={onAddProduct} />
      <button className="button-secondary" onClick={() => history.goBack()}>
        Previous page
      </button>
    </div>
  );
}
