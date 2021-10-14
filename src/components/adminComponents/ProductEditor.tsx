import React, { FormEvent, useState } from "react";
import { iProduct } from "../../interfaces/interfaces";
import ImageUploader from "../sharedComponents/inputComponents/ImageUploader";
import InputAdd from "../sharedComponents/inputComponents/InputAdd";
import InputText from "../sharedComponents/inputComponents/InputText";
import InputTextArea from "../sharedComponents/inputComponents/InputTextArea";
interface iProps {
  onUpdateProduct: Function;
  item: iProduct;
}
export default function ProductEditor({ onUpdateProduct, item }: iProps) {
  const {
    id,
    name,
    productImageUrl,
    description,
    longDescription,
    ingredients,
  } = item;
  const [productName, setProductName] = useState(name);
  const [productURL, setProductURL] = useState(productImageUrl);
  const [productDescription, setProductDescription] = useState(description);
  const [detailDescription, setDetailDescription] = useState(longDescription);
  const [ingredientList, setIngredientList] = useState(ingredients);

  function updateProduct(event: FormEvent) {
    event.preventDefault();
    const product = {
      id: id,
      name: productName,
      productImageUrl: productURL,
      longDescription: detailDescription,
      description: productDescription,
      ingredients: ingredientList,
    };
    onUpdateProduct(product);
  }
  return (
    <form>
      <InputText hook={[productName, setProductName]} inputType="text">
        Product name
      </InputText>
      <ImageUploader
        folder="product"
        name={productName}
        hook={[productURL, setProductURL]}
      />
      <InputTextArea hook={[productDescription, setProductDescription]}>
        Short description
      </InputTextArea>
      <InputTextArea hook={[detailDescription, setDetailDescription]}>
        Long Description
      </InputTextArea>
      <InputAdd hook={[ingredientList, setIngredientList]}>
        Ingredients
      </InputAdd>
      <button className="button-main" onClick={updateProduct}>
        Update product
      </button>
    </form>
  );
}
