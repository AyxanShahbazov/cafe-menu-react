import React from "react";
import "../index.css";

const Header = () => {
  const style = {
    color: "red",
    fontSize: "48px",
    textTransform: "uppercase",
  };

  return (
    <header>
      <h1 className="header">Fast React Pizza Co.</h1>
    </header>
  );
};

export default Header;
