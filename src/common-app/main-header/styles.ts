import clsx from "clsx";
import { CSSProperties } from "react";
import { colorx } from "./main-header.component";

export const containerStyles = () =>
  clsx(`
      z-0  flex flex-row items-center justify-between px-[16px] font-[cursive]
       cou w-full  ${colorx} h-[85px] sm:px-[32px]
        `);

export const navStyles = (value: string) => clsx(`${value}   `);

// Testing new styles with props in typescript with CSS autocomplite
export const tagEl = (color: string): CSSProperties => ({
  background: color,
  padding: "5rem",
  display: "flex",
});
