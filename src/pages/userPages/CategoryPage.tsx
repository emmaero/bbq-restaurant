import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import UserProductCard from '../../components/userComponents/product/UserProductCard';
import useFetch from '../../customHooks/useFetch';
import { iCategory, iProduct } from '../../interfaces/interfaces';
import { useCategory } from '../../states/CategoryProvider';
type PropParams = {
  categoryId: string;
};
export default function CategoryPage() {
    const { categoryId } = useParams<PropParams>();
    const { categories, dispatch } = useCategory();
    const category = categories.find(
      (item: iCategory) => item.id === categoryId
    );
    const path = `category/${categoryId}/products`;
    const { data, loading, error } = useFetch(path);
    let history = useHistory();

    const productItems = data.map((item: iProduct) => (
      <UserProductCard key={item.id} product={item} categoryId={categoryId} />
    ));
  return (
          <div className="user-page row">
      <div className="category-header">
        <h1>{category.name}</h1>
        <div className="overlay"></div>
        <img
          src={category.imageURL}
          alt="vegan"
        />
      </div>
      <div className="category-page-detail row">
        <p>{category.description}</p>
        

        <button className="button-secondary" onClick={() => history.goBack()}>
          Previous page
        </button>
        {loading && <p>Loading ⏱</p>}
        {data && <ul className="list row">{productItems}</ul>}
        {error === 2 && <p>Error</p>}
      </div>

      </div>
    );
}
