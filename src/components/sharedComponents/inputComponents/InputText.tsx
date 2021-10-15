import React, { ReactNode } from "react";
interface iProps {
  hook: any;
  children: ReactNode;
  inputType: string;
}
export default function InputText({ children, hook, inputType }: iProps) {
  const [state, setState] = hook;
  return (
    <>
      <label>
        <br />
        <span>{children}</span> <br />
        <input
          type={inputType}
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
      </label>
    </>
  );
}
