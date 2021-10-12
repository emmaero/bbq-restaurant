import React from 'react'
interface iProps {
  hook: any;
  children: JSX.Element[] | JSX.Element;
}
export default function InputText({ children, hook }:iProps) {
    const [state, setState] = hook;
    return (
      <>
        <label>
          <br />
          <span>{children}</span> <br />
          <input
            type="text"
            value={state}
            onChange={(event) => setState(event.target.value)}
          />
        </label>
      </>
    );
}
