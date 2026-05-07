import React from "react";
import { useAppFunction } from "../../hooks";

interface Props {
  img?: string | undefined;
  alt?: string | undefined;
  defaultImg?: boolean;
}

export const BoxCardBase: React.FC<Props> = (props) => {
  const { img, alt, defaultImg = true } = props;

  const { handleImgError } = useAppFunction();

  return (
    <div data-component="BoxCardBase" className="">
      <img
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) =>
          handleImgError(e, defaultImg ?? true)
        }
        loading="lazy"
        src={img}
        alt={alt}
      />
    </div>
  );
};
