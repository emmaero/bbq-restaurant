import React from "react";
import { useCallback, useEffect, useState } from "react";
//project files
import ReactRouter from "./components/sharedComponents/ReactRouter";
import { getCollection } from "./scripts/firestore";
import { useCategory } from "./states/CategoryProvider";
import "./css/style.css";


export default function App() {
  //Global state
  const {dispatch } = useCategory();
  //local state
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error
  const path = "category";
  const categoryCallback = useCallback(async (path) => {
    try {
      const categories = await getCollection(path);
       dispatch({ type: "SET_CATEGORIES", payload: categories });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => {
    categoryCallback(path);
  }, [categoryCallback]);
  return (
    <div className="App">
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && <ReactRouter />}
      {status === 2 && <p>Error 🚨</p>}
    </div>
  );
}
