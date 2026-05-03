import React from "react";
import { BoxText } from "../../common-app";

export const LayoutHome: React.FC = () => {
  return (
    <main className=" bg-black">
      <div>
        <BoxText title="Name" value="Joe" />
      </div>
    </main>
  );
};
