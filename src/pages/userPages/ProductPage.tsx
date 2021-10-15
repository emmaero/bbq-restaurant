import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ProductDetail from "../../components/userComponents/product/ProductDetail";
import { iProduct } from "../../interfaces/interfaces";
import { getDocument } from "../../scripts/firestore";
type PropParams = {
  categoryId: string;
  id: string;
};
export default function ProductPage() {
  const history = useHistory();
  const [product, setProduct] = useState({});
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error
  const { categoryId, id } = useParams<PropParams>();
  const path = `category/${categoryId}/products`;
  const fetchData = useCallback(
    async (path: string) => {
      try {
        const productItem = await getDocument(path, id);
        //@ts-ignore
        setProduct(productItem);
        setStatus(1);
      } catch {
        setStatus(2);
      }
    },
    [id]
  );
  useEffect(() => {
    fetchData(path);
  }, [fetchData, path]);

  return (
    <>
      {status === 0 && <p>Loading</p>}
      {status === 1 && <ProductDetail item={product} />}
      {status === 2 && <p>Error</p>}
    </>
  );
}
