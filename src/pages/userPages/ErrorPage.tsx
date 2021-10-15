import React from "react";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="user-page row">
      <div className="background">
        <img
          src="https://miro.medium.com/max/2000/1*cLQUX8jM2bMdwMcV2yXWYA.jpeg"
          alt="404"
        />
      </div>
      <div className="backhome">
        <NavLink to={"/"} className="btn btn-main btn-300">
          <button className="button-main">Go to home page</button>
        </NavLink>
      </div>
    </main>
  );
}
