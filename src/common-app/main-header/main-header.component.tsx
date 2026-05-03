import React, { useState } from "react";
import clsx from "clsx";
import { containerStyles, navStyles } from "./styles";

interface CartItems {
  name: string;
}

export let colorx = "bg-rfe-primary-container";

export const MainHeader: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItems[]>([
    { name: "hat" },
    { name: "shirt" },
  ]);

  const stylesNavValue = `flex flex-row items-center justify-center w-full`;

  const stylesUlValue = clsx(`flex flex-row items-center justify-between  
    w-full`);

  const stylesLi = (bold: boolean = false) =>
    clsx(
      `${bold ? "font-semibold border-b-2 border-rfe-title-pink" : ""}   text-rfe-title-pink flex flex-row `,
    );

  return (
    <header data-component="MainHeader" className={containerStyles()}>
      <div className="flex flex-row justify-between items-center gap-5 w-[500px]  ">
        <h3 className="flex items-center justify-center min-w-[160px] h-[32px] text-rfe-title-pink font-bold font-[liberation-serif] text-[22px]">
          Maison du Chat
        </h3>
        <nav className={navStyles(stylesNavValue)}>
          <ul className={stylesUlValue}>
            <li className={stylesLi(true)}>
              <a href="#">Shop</a>
            </li>
            <li className={stylesLi()}>
              <a href="#">New Arrivals</a>
            </li>
            <li className={stylesLi()}>
              <a href="#">Sale</a>
            </li>
            <li className={stylesLi()}>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
      {/*  */}
      <div className="flex flex-row justify-end items-center gap-5 w-[500px]  ">
        <input
          placeholder="Search the collection..."
          className="ps-2 rounded-rfe-radius-base"
          type="text"
        />
        <div className="flex   justify-center items-center overflow-hidden">
          <img
            src="/public/icons/little-user.svg"
            alt="User icon"
            className="w-4 h-4"
          />
        </div>
        <div className="flex relative justify-center items-center  ">
          {cartItems && cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 rounded-full flex justify-center items-center text-[9px] text-rfe-primary-container bg-rfe-title-pink  w-3 h-3">
              {cartItems.length}
            </span>
          )}
          <img
            src="/public/icons/little-empty-cart.svg"
            alt="Cart icon"
            className="w-4 h-4"
          />
        </div>
      </div>
    </header>
  );
};
