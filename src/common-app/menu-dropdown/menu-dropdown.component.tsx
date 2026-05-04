import React from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

export const MenuDropdown: React.FC = () => {
  const location = useLocation();

  const stylesNavValue = `flex flex-row items-center justify-center w-full  hidden sm:block`;

  const stylesLi = (bold: boolean = false) =>
    clsx(
      `${bold ? "font-semibold border-b-2 border-rfe-title-pink" : ""}   text-rfe-title-pink flex flex-row `,
    );

  return (
    <div data-component="MenuDropdown">
      <nav className={stylesNavValue}>
        <ul className={"flex flex-col items-center justify-between w-full"}>
          <li className={stylesLi(location.pathname === "/")}>
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
  );
};
