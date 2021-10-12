import React, { useState } from "react";
import InputText from "../sharedComponents/inputComponents/InputText";
import InputTextArea from "../sharedComponents/inputComponents/InputTextArea";
import { iCategory } from "../../interfaces/interfaces";

interface iProps {
  item: iCategory;
  onUpdate: Function;
  onDelete: Function;
}
export default function EditCategoryForm({ item, onUpdate, onDelete }: iProps) {
  const {name, imageURL, description } = item;

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
      <InputText hook={[imageUrl, setImageURL]}>
        <>Category Image URL:</>
      </InputText>
      <InputTextArea hook={[content, setContent]}>
        <>Category description</>
      </InputTextArea>

      <button onClick={() => onDelete()}>Delete</button>
      <button onClick={onSubmit}>Update</button>
    </form>
  );
}
