import React from "react";

export const MainImage: React.FC = () => {
  return (
    <div
      data-component="MainImage"
      className="relative z-0 flex flex-col flex-1 justify-start items-center w-full h-full   "
    >
      <img
        className="absolute z-[1]"
        src="/public/images/Gradient.png"
        alt="Gradient mMain image"
      />
      <img
        className="absolute  z-0"
        src="/images/main-image-feline.png"
        alt="Main image cat Maison du Chat"
      />
    </div>
  );
};
