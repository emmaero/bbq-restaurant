import React, { useState } from "react";
import InputText from "../sharedComponents/inputComponents/InputText";
import InputTextArea from "../sharedComponents/inputComponents/InputTextArea";
import {iCategory} from "../../interfaces/interfaces"
interface iProps{
    onAddProduct: Function;
    item: iCategory;
}
export default function AddProductForm({onAddProduct,item}:iProps) {
  const [productName, setProductName] = useState("");
  const [productURL, setProductURL] = useState("");
  const [description, setDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [ingredients, setIngredients] = useState(Array<string>());
  const [ingredient, setIngredient] = useState("");
  const productIngredients = ingredients.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  function onAddIngredient(event: any) {
    event.preventDefault();
    const newIngredients = [...ingredients, ingredient];
    setIngredients(newIngredients);
    setIngredient("");
  }
    function addProduct(event: any) {
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
      <InputText hook={[productName, setProductName]}>
        <>Product name</>
      </InputText>
      <InputText hook={[productURL, setProductURL]}>
        <>Image URL</>
      </InputText>
      <InputTextArea hook={[description, setDescription]}>
        <>Short description</>
      </InputTextArea>
      <InputTextArea hook={[longDescription, setLongDescription]}>
        <>Long Description</>
      </InputTextArea>
      <InputText hook={[ingredient, setIngredient]}>
        <>Ingredients</>
      </InputText>
      <button onClick={onAddIngredient}>Add</button>
          <ol>{productIngredients}</ol>
          <button onClick={addProduct}>Add product</button>
    </form>
  );
}
