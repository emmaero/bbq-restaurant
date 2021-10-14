import React from "react";
import { useCategory } from "../../states/CategoryProvider";
import ListComponent from "../../components/sharedComponents/ListComponent";
import UserCategoryCard from "../../components/userComponents/category/UserCategoryCard";
export default function Menu() {
  const { categories } = useCategory();
  return (
    <div className="category-page-detail row">
      <p>Our menu</p>
      <ul className="product-list row">
        <ListComponent list={categories} ComponentList={UserCategoryCard} />
      </ul>
    </div>
  );
}
