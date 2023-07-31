import React from 'react'
import Pizza from './Pizza.jsx'
import "../index.css";

const Menu = () => {
    return (
      <main className="menu">
        <h2>Our Menu</h2>
        <Pizza />
        <Pizza />
        <Pizza />
      </main>
    );
}

export default Menu