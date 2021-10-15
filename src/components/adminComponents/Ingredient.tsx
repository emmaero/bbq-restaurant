import React from "react";
interface iProps {
  item: string;
}
export default function Ingredient({ item }: iProps) {
  return <li>{item}</li>;
}
