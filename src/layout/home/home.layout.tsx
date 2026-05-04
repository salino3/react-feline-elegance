import React from "react";
import clsx from "clsx";
import { MainHeader } from "../../common-app";
import { HomePage } from "../../pods";

export const LayoutHome: React.FC = () => {
  const containerStyles = clsx(`
  z-0   flex flex-col items-center justify-start min-h-[100dvh] relative  w-full
   [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
  bg-rfe-surface  bg-orange-300 `);

  return (
    <main data-component="LayoutHome" className={`${containerStyles}`}>
      <MainHeader />
      <HomePage />
    </main>
  );
};
