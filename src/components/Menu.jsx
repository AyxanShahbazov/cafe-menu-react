import React from "react";
import Pizza from "./Pizza.jsx";
import "../index.css";
import pizzaData from "./data.js"

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
};

export default Menu;
