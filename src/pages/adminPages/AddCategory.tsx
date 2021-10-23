import React from "react";
import { iCategory } from "../../interfaces/interfaces";
import CategoryForm from "../../components/adminComponents/CategoryForm";
import CategoryAdminCard from "../../components/adminComponents/CategoryAdminCard";
import { useCategory } from "../../states/CategoryProvider";
import { createDocument } from "../../scripts/firestore";

export default function AddCategory() {
  // Global state
  const { categories, dispatch } = useCategory();

  const categoryList = categories.map((item: iCategory) => (
    <CategoryAdminCard key={item.id} item={item} />
  ));

  async function onAdd(categoryInfo: iCategory) {
    categoryInfo.id = await createDocument("category", categoryInfo);
    dispatch({ type: "ADD_CATEGORIES", payload: categoryInfo });
  }

  return (
    <div className="admin-container">
      <CategoryForm onAdd={onAdd} />

      <ul className="list">{categoryList}</ul>
    </div>
  );
}
