import React from "react";
import { useAppFunction } from "../../hooks";

interface Props {
  img?: string | undefined;
  alt?: string | undefined;
  defaultImg?: boolean;
  titleImage: string;
  price: number;
}

export const BoxCardBase: React.FC<Props> = (props) => {
  const { img, alt, defaultImg = true, titleImage, price } = props;

  const { handleImgError } = useAppFunction();

  return (
    <div data-component="BoxCardBase" className="flex flex-col gap-1 p-1">
      <div className="flex items-center justify-center overflow-hidden object-contain rounded-rfe-radius-base">
        <img
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) =>
            handleImgError(e, defaultImg ?? true)
          }
          loading="lazy"
          src={img}
          alt={alt}
        />
      </div>
      <strong className="leading-5 font-[Noto-Serif]">{titleImage}</strong>
      <span className="leading-5 ">$ {price.toFixed(2)}</span>
    </div>
  );
};
