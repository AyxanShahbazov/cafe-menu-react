import React from "react";
import "./data.js";

const Pizza = ({pizzaObj}) => {
  console.log(pizzaObj);

  if (pizzaObj.soldOut) {
    return null;
  }

  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price + 3}</span>
      </div>
    </li>
  );
};

export default Pizza;