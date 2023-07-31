import React from "react";

const Footer = () => {
  const hour = new Date().getHours();
  const isOpen = hour > 8 && hour < 22;
  console.log(isOpen);

    return <footer className="footer">
        {new Date().toLocaleTimeString()}
        We're currently open
    </footer>;
};

export default Footer;
