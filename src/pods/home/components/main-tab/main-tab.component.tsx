import React from "react";

export const MainTab: React.FC = () => {
  return (
    <div
      data-component="MainTab"
      className="relative z-[2] w-[672px] h-[406px] flex flex-col justify-center p-16 
                 rounded-[60px] bg-rfe-surface-container-lowest-opacity 
                 backdrop-blur-sm border border-white/20 shadow-2xl"
    >
      <div className="relative z-10 flex flex-col gap-6">
        <h3 className="font-[Bold-Italic] text-[12px] text-rfe-primary ">
          L'ÉDITION PRINTEMPS
        </h3>
        <h1 className="font-bold font-[Noto-Serif] text-[48px] ">
          Couture for the <br /> Modern Feline
        </h1>
        <p className="font-[Italic] text-[18px]">
          Experience the pinnacle of cat fashion. Hand-stitched silken robes and
          velvet collars designed for the discerning companion.
        </p>

        <div className="flex gap-4 mt-4">
          <button className="bg-rfe-light-btn border border-rfe-on-secondary-fixed-variant text-rfe-on-secondary-fixed-variant px-8 py-4 rounded-full font-semibold hover:bg-[#b5dba0]  transition-colors">
            Discover the Collection
          </button>
          <button className="border border-rfe-surface-tint text-rfe-surface-tint px-8 py-4 rounded-full font-semibold hover:bg-white/60 transition-colors">
            View Lookbook
          </button>
        </div>
      </div>
    </div>
  );
};
