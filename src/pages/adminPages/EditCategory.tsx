import React from "react";
import { useCallback, useEffect, useState } from "react";
import { getFirestore } from "@firebase/firestore/lite";
import { iCategory } from "../../interfaces/interfaces";
import { iProduct } from "../../interfaces/interfaces";
import firebaseInstance from "../../scripts/firebase";
import { useHistory } from "react-router";
import {
  getDocument,
  updateDocument,
  deleteDocument,
} from "../../scripts/firestore";
import EditCategoryForm from "../../components/adminComponents/EditCategoryForm";
export default function EditCategory({ match }: any) {
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
  function onUpdate(categoryUpdate: object) {
    updateDocument(database, "category", id, categoryUpdate);
  }
  function onDelete() {
    deleteDocument(database, "category", id);
    history.goBack()
  }
  return (
    <>
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && (
        <EditCategoryForm
          item={category}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      )}
    </>
  );
}
