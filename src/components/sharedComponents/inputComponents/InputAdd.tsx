import React, { FormEvent, ReactNode, useState } from "react";
interface iProps {
  hook: any;
  children: ReactNode;
}
export default function InputAdd({ children, hook }: iProps) {
  const [listState, setListState] = hook;
  const [state, setState] = useState("");
  const productIngredients = listState.map((item: string, index: number) => (
    <li key={index}>{item}</li>
  ));
  function onAddState(event: FormEvent) {
    event.preventDefault();
    const newList = [...listState, state];
    setListState(newList);
    setState("");
  }
  return (
    <div className="ingredients">
          <label>
              
        <br />
        <span>{children}</span> <br />
        <input
          type="text"
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
      </label>
      <button className="button-link" onClick={onAddState}>
        Add
      </button>
      <ol>{productIngredients}</ol>
    </div>
  );
}
