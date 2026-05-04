import React from "react";

export const MainMessage: React.FC = () => {
  return (
    <div
      data-component="MainMessage"
      className="absolute -top-[-50%] -left-[-50%]   flex flex-col justify-center items-center    max-w-[1152px]  z-[2] "
    >
      <h3 className="font-[Noto-Serif] text-[16px] text-white">
        L'Art de Vivre Feline
      </h3>
      <p className="font-[Italic] text-[16px] text-white text-center">
        Curated luxury essentials for the modern companion
      </p>
      <button className="cursor-pointer  bg-[#88a17b]  border border-rfe-on-secondary-fixed-variant text-rfe-on-secondary-fixed-variant px-8 py-4 rounded-full font-semibold hover:bg-rfe-secondary-container   transition-colors">
        Discover the Collection
      </button>
    </div>
  );
};
