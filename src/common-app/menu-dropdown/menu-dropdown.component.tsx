import React from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

interface Props {
  showDropDown: boolean;
}

export const MenuDropdown: React.FC<Props> = ({ showDropDown }) => {
  const location = useLocation();

  const stylesLi = clsx(
    ` flex items-center justify-center text-rfe-title-pink  flex-row w-full   hover:bg-rfe-inverse-primary rounded-md`,
  );

  const stylesAnchor = (bold: boolean = false) =>
    clsx(`
        ${bold ? "font-semibold border-b-2 border-rfe-title-pink" : ""}
        `);

  return (
    <div
      className={clsx(
        "absolute top-full left-0 bg-rfe-primary-container z-10 rounded-md min-w-[200px] overflow-hidden transition-all duration-300 ease-in-out",
        showDropDown
          ? "h-[116px] border-2 border-rfe-title-pink py-1 opacity-100 mt-2"
          : "h-0 border-0 py-0 opacity-0 mt-0",
      )}
      data-component="MenuDropdown"
    >
      <nav className="flex flex-row items-center justify-center w-full">
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
