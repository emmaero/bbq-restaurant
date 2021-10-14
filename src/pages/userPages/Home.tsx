import React from "react";
import Hero from "../../components/userComponents/home/Hero";
import { useCategory } from "../../states/CategoryProvider";
import ListComponent from "../../components/sharedComponents/ListComponent";
import CategorySection from "../../components/userComponents/home/CategorySection";

export default function Home() {
  const { categories } = useCategory();
  const threeCategories = categories.slice(0, 3);
  return (
    <>
      <Hero />
      <div className="home-category">
        <ListComponent list={threeCategories} ComponentList={CategorySection} />
      </div>
    </>
  );
}
