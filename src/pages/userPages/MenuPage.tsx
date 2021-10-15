import React from "react";
import { useCategory } from "../../states/CategoryProvider";
import ListComponent from "../../components/sharedComponents/ListComponent";
import CategoryItem  from "../../components/userComponents/category/CategoryItem";
export default function MenuPage() {
  const { categories } = useCategory();
  return (
    <div className="category-page-detail row user-page">
      <h1>Our menu</h1>
      <ul className="product-list row">
        <ListComponent list={categories} ComponentList={CategoryItem } />
      </ul>
    </div>
  );
}
