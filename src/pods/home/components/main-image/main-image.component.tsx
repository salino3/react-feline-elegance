import React from "react";
import { useMediaQuery } from "react-responsive";
import { MainMessage, MainTab } from "..";

export const MainImage: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <div
      data-component="MainImage"
      className="bg-slate-600 relative z-0 flex flex-col   justify-start items-center w-full h-fit    "
    >
      <img
        className="absolute z-[1]"
        src="/images/Gradient.png"
        alt="Gradient Main image"
      />
      <img
        className="w-full h-auto block  z-0"
        src="/images/main-image-feline.png"
        alt="Main image cat Maison du Chat"
      />
      {isDesktopOrLaptop ? <MainTab /> : <MainMessage />}
    </div>
  );
};
