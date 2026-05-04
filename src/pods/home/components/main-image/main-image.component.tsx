import React from "react";
import { MainTab } from "../main-tab";

export const MainImage: React.FC = () => {
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
      <MainTab />
    </div>
  );
};
