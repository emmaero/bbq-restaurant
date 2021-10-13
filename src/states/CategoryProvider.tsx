// @ts-nocheck
// NPM Packages
import React from "react";
import { useContext, createContext, useReducer, ReactNode } from "react";

// Project files
import categoryReducer from "./categoryReducer";

// Interfaces
interface iProps {
  children: ReactNode;
}

// Properties
const CategoryContext = createContext(null);
export function CategoryProvider({ children }: iProps) {
  // Local state
  const [categories, dispatch] = useReducer(categoryReducer, []);
  return (
    <CategoryContext.Provider value={{ categories, dispatch }}>
      {children}
    </CategoryContext.Provider>
  );
}
export function useCategory():any {
  const context = useContext(CategoryContext);
  return context;
}
