import React, { useState } from "react";
import InputText from "../sharedComponents/inputComponents/InputText";
import InputTextArea from "../sharedComponents/inputComponents/InputTextArea";
import ImageUploader from "../userComponents/ImageUploader";
import { iCategory } from "../../interfaces/interfaces";

interface iProps {
  item: iCategory;
  onUpdate: Function;
}
export default function EditCategoryForm({ item, onUpdate }: iProps) {
  const { name, imageURL, description } = item;

  const [heading, setHeading] = useState(name);
  const [imageUrl, setImageURL] = useState(imageURL);
  const [content, setContent] = useState(description);
  function onSubmit(event: any) {
    event.preventDefault();
    const categoryUpdate = {
      name: heading,
      imageURL: imageUrl,
      description: content,
    };
    onUpdate(categoryUpdate);

    resetInputs();
  }

  function resetInputs() {
    setHeading("");
    setContent("");
    setImageURL("");
  }

  return (
    <form>
      <InputText hook={[heading, setHeading]}>
        <>Category name:</>
      </InputText>
      <ImageUploader
        folder="category"
        name={name}
        hook={[imageURL, setImageURL]}
      />
      <InputTextArea hook={[content, setContent]}>
        <>Category description</>
      </InputTextArea>
      <button className="button-main" onClick={onSubmit}>
        Update
      </button>
    </form>
  );
}
