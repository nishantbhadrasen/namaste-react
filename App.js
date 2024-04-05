import React from "react";
import ReactDOM from "react-dom/client";
/**
 * <div id="parent">
 *      <div id ="child">
 *              <h1>this is a h1 tag </h1>
 *      <div>
 *  <div>
 */

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Namaste React 🚀"),
    React.createElement("h2", {}, "This is a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is a h1 tag"),
    React.createElement("h2", {}, "This is a h2 tag"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// console.log(heading);
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(heading);
