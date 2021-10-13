import React, { useState } from "react";
import InputText from "../sharedComponents/inputComponents/InputText";
import InputTextArea from "../sharedComponents/inputComponents/InputTextArea";
import ImageUploader from "../userComponents/ImageUploader";
interface iProps{
  onAdd: Function
}
export default function CategoryForm({onAdd}:iProps) {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");

  function onSubmit(event: any) {
    event.preventDefault();
    const categoryInfo = {
      name: name,
      imageURL: imageURL,
      description: description,
      products:[]
    };
    onAdd(categoryInfo);
    resetInputs();
  }
  function resetInputs() {
    setName("");
    setDescription("");
    setImageURL("");
  }
  return (
    <form>
      <InputText hook={[name, setName]}>
        <>Category name:</>
      </InputText>
      <ImageUploader
        folder="category"
        name={name}
        hook={[imageURL, setImageURL]}
      />
      <InputTextArea hook={[description, setDescription]}>
        <>Category description:</>
      </InputTextArea>
      <button className="button-main" onClick={onSubmit}>
        Add category
      </button>
    </form>
  );
}
