import React from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

interface Props {
  showDropDown: boolean;
}

export const MenuDropdown: React.FC<Props> = ({ showDropDown }) => {
  const location = useLocation();

  const stylesNavValue = `flex flex-row items-center justify-center w-full  `;

  const stylesLi = clsx(
    ` flex items-center justify-center text-rfe-title-pink  flex-row w-full   hover:bg-rfe-inverse-primary rounded-md`,
  );

  const stylesAnchor = (bold: boolean = false) =>
    clsx(`
        ${bold ? "font-semibold border-b-2 border-rfe-title-pink" : ""}
        `);

  return (
    <div
      className="absolute -bottom-[138px] bg-rfe-primary-container py-1 border-2 rounded-md border-rfe-title-pink z-10 min-w-[200px]   "
      data-component="MenuDropdown"
      style={{
        height: showDropDown ? "0px" : "116px",
        transition: "ease",
      }}
    >
      <nav className={stylesNavValue}>
        <ul
          className={
            "flex flex-col gap-[2px] items-center justify-between w-full"
          }
        >
          <li className={stylesLi}>
            <a className={stylesAnchor(location.pathname === "/")} href="#">
              Shop
            </a>
          </li>
          <li className={stylesLi}>
            <a className={stylesAnchor()} href="#">
              New Arrivals
            </a>
          </li>
          <li className={stylesLi}>
            <a className={stylesAnchor()} href="#">
              Sale
            </a>
          </li>
          <li className={stylesLi}>
            <a className={stylesAnchor()} href="#">
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
