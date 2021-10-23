import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ProductEditor from "../../components/adminComponents/ProductEditor";
import { iProduct } from "../../interfaces/interfaces";
import { getDocument, updateDocument } from "../../scripts/firestore";

type PropParams = {
  categoryId: string;
  id: string;
};

export default function ProductUpdate() {
  const history = useHistory();
  const [product, setProduct] = useState<iProduct>();
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error
  const { categoryId, id } = useParams<PropParams>();
  const path = `category/${categoryId}/products`;

  // Consistency you had a useFetch custom hook in other parts of the code but not here. Why? -1
  const fetchData = useCallback(
    async (path: string) => {
      try {
        const productItem = await getDocument(path, id);
        setProduct(productItem as iProduct);
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

  async function onUpdateProduct(productItem: iProduct) {
    await updateDocument(path, productItem.id, productItem);
    alert("Product has been updated");
    history.goBack();
  }

  // Here it would be better to show the loader on the entire page, instead of showing just the title "Update product" alone
  // Plus it would allow you to remove the <></>
  if (status === 0) return <p>Loading</p>;
  if (status === 2) return <p>Error</p>;

  return (
    <div className="admin-container">
      <h1>Update Product</h1>
      <ProductEditor
        onUpdateProduct={onUpdateProduct}
        item={product as iProduct}
      />
      <button className="button-secondary" onClick={() => history.goBack()}>
        Go back
      </button>
    </div>
  );
}
