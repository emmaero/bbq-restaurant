import React from "react";
import { useCallback, useEffect, useState } from "react";
import { getFirestore } from "@firebase/firestore/lite";
import { iCategory } from "../../interfaces/interfaces";
import CategoryForm from "../../components/adminComponents/CategoryForm";
import CategoryCard from "../../components/adminComponents/CategoryCard";
import firebaseInstance from "../../scripts/firebase";
import { getCollection } from "../../scripts/firestore";

export default function AddCategory() {
      const [categories, setCategories] = useState(Array<iCategory>());
      const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error
      // Properties
      const database = getFirestore(firebaseInstance);

      const categoryCallback = useCallback(async () => {
        const collection = await getCollection(database, "category");
        setCategories(collection as iCategory[]);
        setStatus(1);
      }, [database]);
      const categoryList = categories.map((item) => (
        <CategoryCard key={item.id} item={item} />
      ));

      useEffect(() => {
        categoryCallback();
      }, [categoryCallback]);
  return (
    <div>
      <CategoryForm />
      <ul>{categoryList}</ul>
    </div>
  );
}
