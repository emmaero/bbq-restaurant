import React, { useState } from "react";
import InputText from "../sharedComponents/inputComponents/InputText";
import InputTextArea from "../sharedComponents/inputComponents/InputTextArea";
import { createDoc } from "../../scripts/firestore";
import { getFirestore } from "firebase/firestore/lite";
import firebaseInstance from "../../scripts/firebase";

export default function CategoryForm() {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");

  const database = getFirestore(firebaseInstance);

  function onSubmit(event: any) {
    event.preventDefault();
    const categoryInfo = {
      name: name,
      imageURL: imageURL,
      description: description,
    };
    createDoc(database, "category", categoryInfo);
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
      <InputText hook={[imageURL, setImageURL]}>
        <>Category Image URL:</>
      </InputText>
      <InputTextArea hook={[description, setDescription]}>
        <>Category description:</>
      </InputTextArea>
      <button onClick={onSubmit}>Add category</button>
    </form>
  );
}
