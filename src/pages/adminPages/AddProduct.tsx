import React, { useCallback, useEffect, useState } from "react";
import { arrayUnion, getFirestore } from "@firebase/firestore/lite";
import { useHistory } from "react-router-dom";
import AddProductForm from "../../components/adminComponents/AddProductForm";
import { iCategory, iProduct } from "../../interfaces/interfaces";
import firebaseInstance from "../../scripts/firebase";
import { getDocument, updateDocument } from "../../scripts/firestore";

export default function AddProduct({ match }: any) {
  const id = match.params.id;
  const [category, setCategory] = useState<iCategory>({
    id: "",
    name: "",
    imageURL: "",
    description: "",
    products: Array<iProduct>(),
  });
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error
  // Properties
  const database = getFirestore(firebaseInstance);

  const categoryCallback = useCallback(async () => {
    const document = await getDocument(database, "category", id);
    setCategory(document as iCategory);
    setStatus(1);
  }, [database, id]);

  useEffect(() => {
    categoryCallback();
  }, [categoryCallback]);
  let history = useHistory();
  function onAddProduct(product: object, categoryItem: iCategory) {
    updateDocument(database, "category", id, {
      products: arrayUnion(product),
    });
  }

  return (
    <div>
      <h1>Add product here</h1>
      <AddProductForm item={category} onAddProduct={onAddProduct} />
    </div>
  );
}
