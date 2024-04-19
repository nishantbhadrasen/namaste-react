import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  console.log("Header render");

  //if no dependency array => useEffect is called on every render
  //if dependency array is empty= [] =>useEffect is called on initial render (just once)
  //if dependency array is [btnNameReact] => useEffect called when btnNameReact is updated.
  useEffect(() => {
    console.log("useEffect Called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>About Us </li>
          <li>Contact Us </li>
          <li>Cart </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
