import React from "react";

export const ContentHome: React.FC = () => {
  return (
    <div
      data-component="ContentHome"
      className="flex flex-col justify-center items-center px-12  py-[80px] w-full text-rfe-on-surface"
    >
      <div className="flex flex-col pb-3  w-full max-w-[1152px]">
        <h2 className="font-[Noto-Serif] inline-[32px]  text-[32px] font-semibold  ">
          New Arrivals
        </h2>
        <p className="font-[Be Vietnam Pro] text-[16px]">
          Freshly tailored essentials for your companion.
        </p>
      </div>
    </div>
  );
};
