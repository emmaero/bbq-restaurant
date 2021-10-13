import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { iCategory, iProduct } from "../../interfaces/interfaces";
import { useHistory } from "react-router";
import { updateDocument } from "../../scripts/firestore";
import { useCategory } from "../../states/CategoryProvider";
import { getCollection } from "../../scripts/firestore";
import EditCategoryForm from "../../components/adminComponents/EditCategoryForm";
import ProductCard from "../../components/adminComponents/ProductCard";
type PropParams = {
  categoryId: string;
};
export default function EditCategory() {
  const [products, setProducts] = useState<iProduct[]>([]);
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error
  const { categoryId } = useParams<PropParams>();
  const { categories } = useCategory();
  const category = categories.find((item: iCategory) => item.id === categoryId);
  const path = `category/${categoryId}/products`;
  let history = useHistory();

  const fetchData = useCallback(async (path: string) => {
    try {
      const productList = await getCollection(path);
      setProducts(productList as iProduct[]);
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);
  useEffect(() => {
    fetchData(path);
  }, [fetchData]);
  const productItems = products.map((item: iProduct) => (
    <ProductCard key={item.id} item={item}/>
    
  ));
  function onUpdate(categoryUpdate: iCategory) {
    updateDocument("category", categoryUpdate.id, categoryUpdate);
  }

  return (
    <div className="admin-container">
      <EditCategoryForm item={category} onUpdate={onUpdate} />

      <button className="button-secondary" onClick={() => history.goBack()}>
        Previous page
      </button>
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && productItems}
      {status === 2 && <p>Error 🚨</p>}
    </div>
  );
}
