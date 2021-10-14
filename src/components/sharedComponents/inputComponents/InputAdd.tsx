import React, { FormEvent, ReactNode, useState } from "react";
import Ingredient from "../../adminComponents/Ingredient";
interface iProps {
  hook: any;
  children: ReactNode;
}
export default function InputAdd({ children, hook }: iProps) {
  const [listState, setListState] = hook;
  const [state, setState] = useState("");
  const productIngredients = listState.map((item: string, index: number) => (
    <Ingredient key={index} item={item} />
  ));
  function onAddState(event: FormEvent) {
    event.preventDefault();
    const newList = [...listState, state];
    setListState(newList);
    setState("");
  }
  function onClearState(event: FormEvent) {
    event.preventDefault();
    // @ts-ignore
    setListState((prev) => []);
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
      <button className="button-link" onClick={onClearState}>
        Clear
      </button>
      <ol>{productIngredients}</ol>
    </div>
  );
}
