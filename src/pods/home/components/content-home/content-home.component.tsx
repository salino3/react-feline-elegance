import React from "react";
import { BoxCardBase } from "../../../../common-app/box-card-base/box-card-base.component";

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

      <div className="flex flex-row gap-4 items-center justify-center border-2 w-full max-w-[1152px]">
        <div className="overflow-hidden flex items-center justify-center rounded-rfe-radius-base">
          <img src="/public/images/content-home/big_01.png" alt="Cat Image" />
        </div>
        {/*  */}
        <div className="overflow-hidden flex flex-col items-center justify-center rounded-rfe-radius-base">
          <BoxCardBase
            alt="Cat image"
            img="/images/content-home/small_02.png"
          />
          <BoxCardBase
            alt="Cat image"
            img="/images/content-home/small_03.png"
          />
          <BoxCardBase
            alt="Cat image"
            img="/images/content-home/small_04.png"
          />
          <BoxCardBase
            alt="Cat image"
            img="/images/content-home/small_05.png"
          />
        </div>
      </div>
    </div>
  );
};
