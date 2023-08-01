import React from "react";
import "./data.js";

const Pizza = ({pizzaObj}) => {
  console.log(pizzaObj);

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price + 3}</span>
      </div>
    </li>
  );
};

export default Pizza;