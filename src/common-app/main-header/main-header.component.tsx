import React from "react";
import clsx from "clsx";
import { containerStyles, navStyles } from "./styles";

export let colorx = "bg-rfe-primary-container";

export const MainHeader: React.FC = () => {
  const stylesNavValue = `flex flex-row items-center justify-center w-full`;

  const stylesUlValue = clsx(`flex flex-row items-center justify-between  
    w-full`);

  const stylesLi = (bold: boolean = false) =>
    clsx(
      `${bold ? "font-semibold border-b-2 border-rfe-title-pink " : ""}   text-rfe-title-pink flex flex-row `,
    );

  return (
    <header data-component="MainHeader" className={containerStyles()}>
      <div className="flex flex-row justify-between items-center gap-5 w-[500px] flex-none ">
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
    </header>
  );
};
