import React from "react";
import { useCategory } from "../../states/CategoryProvider";
import ListComponent from "../../components/sharedComponents/ListComponent";
import CategoryItem from "../../components/userComponents/category/CategoryItem";
export default function MenuPage() {
  const { categories } = useCategory();
  return (
    <div className="container">
      <div className="category-header">
        <h1>Our menu</h1>
        <div className="overlay"></div>
        <img
          src={require("../../assets/images/restaurant.jpg")}
          alt=""
        />
      </div>
      <ul className="product-list row">
        <ListComponent list={categories} ComponentList={CategoryItem} />
      </ul>
    </div>
  );
}
