import React from "react";
import { ContentHome, MainImage } from "./components";

export const HomePage: React.FC = () => {
  return (
    <div
      data-component="HomePage"
      className="flex flex-col flex-1 justify-start items-center w-full h-full   "
    >
      <MainImage />
      <ContentHome />
    </div>
  );
};
