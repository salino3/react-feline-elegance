import React from "react";
import { BoxText } from "../../common-app";

export const HomePage: React.FC = () => {
  return (
    <div
      data-component="HomePage"
      className="flex flex-col flex-1 justify-start items-center w-full h-full   "
    >
      <div>
        <BoxText title="Name" value="Joe" />
      </div>
    </div>
  );
};
