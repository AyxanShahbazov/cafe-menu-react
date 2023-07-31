import React from "react"
import Footer from "./components/Footer.jsx";
import Menu from "./components/Menu.jsx";
import Header from "./components/Header.jsx";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App
