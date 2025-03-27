import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo || ""} alt="logo donuts" />
      </div>
      <div className="nav-menu-container">
        <a href="/">Home</a>
        <a href="/">Sobre nós</a>
        <a href="/">Nosso trabalho</a>
        <a href="/">Avaliação</a>
        <a href="/">Contato</a>
        <a href="/">
          <BsCart2 className="navbar-cart-icon" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
