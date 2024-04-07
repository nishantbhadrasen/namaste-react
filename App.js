import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => ReactObject-JS Object => HTMLElement(render)

//JSX - HTML-like or XML-like syntax

//JSX (transpiled before it reaches the JS) - PARCEL - Babel

//JSX => babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

//React Element
const heading = (
  <h1 className="heading" tabIndex="1">
    Namaste React Using JSX 🚀
  </h1>
);

//React Component

const HeadingComponent = () => <h1>Namaste React Functional Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
