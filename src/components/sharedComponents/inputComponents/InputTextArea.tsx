import React from 'react'
interface iProps {
  hook: any;
  children: JSX.Element[] | JSX.Element;
}
export default function InputTextArea({ children, hook }: iProps) {
  const [state, setState] = hook;
  return (
    <label>
      <br />
      <span>{children}</span> <br />
      <textarea
        rows={3}
        cols={60}
        name="text"
        placeholder="Enter text"
        value={state}
        onChange={(event) => setState(event.target.value)}
      />
    </label>
  );
}
