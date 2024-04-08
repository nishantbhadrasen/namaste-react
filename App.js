import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/**
 * Header
 * - Logo
 * - New Items
 * Body
 * - Search
 * - Restaurant Container
 *    - Img
 *    - Name of Res, Star Rating, Cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 * */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://banner2.cleanpng.com/20180702/vrt/kisspng-online-food-ordering-food-delivery-grubhub-5b3a1b75a36132.9626073015305347736692.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>About Us </li>
          <li>Contact Us </li>
          <li>Cart </li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <h3>Meghna Foods</h3>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">{/* RestaurantCard */}</div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
