import React, { FormEvent, useState } from "react";
import InputText from "../sharedComponents/inputComponents/InputText";
import InputTextArea from "../sharedComponents/inputComponents/InputTextArea";
import ImageUploader from "../userComponents/ImageUploader";
import { iCategory } from "../../interfaces/interfaces";
import InputAdd from "../sharedComponents/inputComponents/InputAdd";

interface iProps {
  onAddProduct: Function;
  item: iCategory;
}
export default function AddProductForm({ onAddProduct, item }: iProps) {
  const [productName, setProductName] = useState("");
  const [productURL, setProductURL] = useState("");
  const [description, setDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [ingredients, setIngredients] = useState(Array<string>());
  const [ingredient, setIngredient] = useState("");

  function onAddIngredient(event: FormEvent) {
    event.preventDefault();
    const newIngredients = [...ingredients, ingredient];
    setIngredients(newIngredients);
    setIngredient("");
  }
  function addProduct(event: FormEvent) {
    event.preventDefault();
    const product = {
      name: productName,
      productImageUrl: productURL,
      longDescription: longDescription,
      description: description,
      ingredients: ingredients,
    };
    onAddProduct(product, item);
  }
  return (
    <form>
      <InputText hook={[productName, setProductName]} inputType="text">
        <>Product name</>
      </InputText>
      <ImageUploader
        folder="product"
        name={productName}
        hook={[productURL, setProductURL]}
      />
      <InputTextArea hook={[description, setDescription]}>
        <>Short description</>
      </InputTextArea>
      <InputTextArea hook={[longDescription, setLongDescription]}>
        <>Long Description</>
      </InputTextArea>
      <InputAdd hook={[ingredients, setIngredients]}>
        <>Ingredients</>
      </InputAdd>
      <button className="button-main" onClick={addProduct}>
        Add product
      </button>
    </form>
  );
}
