import React from 'react'
import ProductCard from './ProductCard';
import { useCategory } from '../../../states/CategoryProvider';
import { iCategory } from '../../../interfaces/interfaces';

export default function Category() {
    const { categories } = useCategory();

//   const category = categories.find((item:iCategory) => item.id === id);
//   const products = category.products.map((product) => (
//     <ProductCard key={product.id} product={product} categoryId={id} />
//   ));
  return (
    <div className="container">
      <div className="category-header">
        {/* <h1>{category.name}</h1>
        <div className="overlay"></div>
        <img
          src={
            require("../../assets/images/category" + category.categoryImage)
              .default
          }
          alt="vegan"
        />
      </div>
      <div className="category-page-detail row">
        <p>{category.description}</p>
        <ul className="product-list row">{products}</ul> */}
      </div>
    </div>
  );
}


