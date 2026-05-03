import React from "react";
import clsx from "clsx";
import { BoxText } from "../../common-app";

export const LayoutHome: React.FC = () => {
  const containerStyles = clsx(`
    flex flex-col items-center justify-center min-h-[100dvh] relative 
   [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
    `);

  return (
    <main className={` bg-black ${containerStyles}`}>
      <div>
        <BoxText title="Name" value="Joe" />
      </div>
    </main>
  );
};
