import React from "react";
import clsx from "clsx";
import { BoxText, MainHeader } from "../../common-app";

export const LayoutHome: React.FC = () => {
  const containerStyles = clsx(`
    flex flex-col items-center justify-start min-h-[100dvh] relative 
   [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
  bg-[#064E3B]  `);

  return (
    <main data-component="LayoutHome" className={`${containerStyles}`}>
      <MainHeader />
      <div>
        <BoxText title="Name" value="Joe" />
      </div>
    </main>
  );
};
