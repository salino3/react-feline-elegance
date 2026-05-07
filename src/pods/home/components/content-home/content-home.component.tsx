import React from "react";
import { BoxCardBase } from "../../../../common-app/box-card-base/box-card-base.component";
import clsx from "clsx";

interface PropsGridImages {
  img: string;
  price: number;
  title: string;
}

const boxCardBaseData: PropsGridImages[] = [
  {
    img: "/images/content-home/small_02.png",
    price: 145.0,
    title: "The Pearl Color",
  },
  {
    img: "/images/content-home/small_03.png",
    price: 220.0,
    title: "Velver Morning Robe",
  },
  {
    img: "/images/content-home/small_04.png",
    price: 65.0,
    title: "Silk Ribbon Bow",
  },
  {
    img: "/images/content-home/small_05.png",
    price: 88.0,
    title: "The Artist's Beret",
  },
];

export const ContentHome: React.FC = () => {
  const boxStyles = clsx(`
        
        `);

  return (
    <div
      data-component="ContentHome"
      className="flex flex-col justify-start items-center px-12  py-[80px] w-full text-rfe-on-surface"
    >
      <div className="flex flex-col pb-3  w-full max-w-[1152px]">
        <h2 className="font-[Noto-Serif] inline-[32px]  text-[32px] font-semibold  ">
          New Arrivals
        </h2>
        <p className="font-[Be Vietnam Pro] text-[16px]">
          Freshly tailored essentials for your companion.
        </p>
      </div>

      <div
        data-item="boxImages"
        className="flex flex-row gap-4 items-start justify-center border-2 w-full max-w-[1152px]"
      >
        <div className="overflow-hidden flex-1 flex items-center justify-center rounded-rfe-radius-base">
          <img src="/public/images/content-home/big_01.png" alt="Cat Image" />
        </div>
        {/*  */}
        <div className="overflow-hidden flex-1 flex flex-wrap items-center justify-center rounded-rfe-radius-base">
          {boxCardBaseData.map((data: PropsGridImages) => (
            <BoxCardBase
              alt="Cat image"
              img={data.img}
              price={data.price}
              titleImage={data.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
