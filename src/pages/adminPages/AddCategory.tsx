import React from "react";
import { iCategory } from "../../interfaces/interfaces";
import CategoryForm from "../../components/adminComponents/CategoryForm";
import CategoryCard from "../../components/adminComponents/CategoryCard";
import { useCategory } from "../../states/CategoryProvider";
import { createDocument } from "../../scripts/firestore";

export default function AddCategory() {
  // Global state
  const { categories } = useCategory();

  const categoryList = categories.map((item:iCategory) => (
    <CategoryCard key={item.id} item={item} />
  ));
function onAdd(categoryInfo:iCategory) {
   createDocument("category", categoryInfo);
}

  return (
    <div className="admin-container">
      <CategoryForm onAdd={onAdd}/>

      <ul className="list">{categoryList}</ul>
    </div>
  );
}
