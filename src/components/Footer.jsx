import React from "react";
import Button from "./Button";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 20;
  const isOpen = hour > 8 && hour < 22;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We are <strong>open</strong> untill {closeHour}:00. Come visit us or
            order online.
          </p>
          <Button text="Order now" />
        </div>
      )}
    </footer>
  );
};

export default Footer;
