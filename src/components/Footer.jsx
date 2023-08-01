import React from "react";
import Button from "./Button";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour > 8 && hour < 22;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We are <strong>open</strong> untill {closeHour}:00. Come visit us or
            order online.
          </p>
          <Button text="Order now" />
        </div>
      ) : <p>We are happy to welcome you between {openHour}:00 and {closeHour}:00.</p>
      }
    </footer>
  );
};

export default Footer;
