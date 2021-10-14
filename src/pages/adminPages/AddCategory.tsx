import React from "react";
import { iCategory } from "../../interfaces/interfaces";
import CategoryForm from "../../components/adminComponents/CategoryForm";
import CategoryCard from "../../components/adminComponents/CategoryCard";
import { useCategory } from "../../states/CategoryProvider";
import { createDocument } from "../../scripts/firestore";

export default function AddCategory() {
  // Global state
  const { categories, dispatch } = useCategory();

  const categoryList = categories.map((item:iCategory) => (
    <CategoryCard key={item.id} item={item} />
  ));
async function onAdd(categoryInfo:iCategory) {
  categoryInfo.id = await createDocument("category", categoryInfo);
  dispatch({ type: "ADD_CATEGORIES" , payload: categoryInfo});
}

  return (
    <div className="admin-container">
      <CategoryForm onAdd={onAdd}/>

      <ul className="list">{categoryList}</ul>
    </div>
  );
}
