import '../App.scss';
import React from 'react';
import { useState } from "react";

function Navigation() {
    const [burgerOpen, setBurgerOpen] = useState(true) 
  return (
    <div className="navigation">
        <div className="burger-menu">
            { burgerOpen ? 
            <img src={`${process.env.PUBLIC_URL}/assets/menu-icon-open.svg`} alt="icon of a menu made out of three parrarel lines" onClick={ () => {setBurgerOpen(false)}}/> : 
            <img src={`${process.env.PUBLIC_URL}/assets/menu-icon-closed.svg`} alt="icon of a menu made out of two crossed lines" className="burger-closed" onClick={() => {setBurgerOpen(true)}} />}
        </div>
        { burgerOpen ? null :
        <div className="burger-menu-links">
            <ol onClick={() => {setBurgerOpen(true)}}>
                <li ><a  href="/">Home</a></li>
                <li><a href="./parents">For parents</a></li>
                <li><a href="./students">For students</a></li>
                <li><a href="./recruitation">Recruitation</a></li>
                <li><a href="./about">About</a></li>
            </ol>
        </div>  }
        
        <div className="navigation-logo-container">
            <a href="/">
            <img src={`${process.env.PUBLIC_URL}/assets/Samochodowka-logo.png`} alt="logo of the school, deep blue syluette of a car" />
            <h2>Samochodówka</h2>
            <p>W Koszalinie</p>
            </a>
        </div>
        <ol className="navigation-bar">
            <li><a href="./parents">For parents</a></li>
            <li><a href="./students">For students</a></li>
            <li><a href="./recruitation">Recruitation</a></li>
            <li><a href="./about">About</a></li>
        </ol>
    </div>
  );
}

export default Navigation;
