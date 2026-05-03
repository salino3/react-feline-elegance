import React from "react";

interface BoxTextProps {
  title: string;
  value: string;
}

const BoxText: React.FC<BoxTextProps> = (props) => {
  const { title, value } = props;
  return (
    <div
      data-testid="box-container"
      className="bg-rfe-surface-dim p-2 rounded-rfe-radius-base flex flex-row gap-2 items-center justify-center min-w-[150px] text-center"
    >
      <strong>{title}</strong>
      <span>{value}</span>
    </div>
  );
};

export const LayoutHome: React.FC = () => {
  return (
    <main>
      <div>
        <BoxText title="Name" value="Joe" />
      </div>
    </main>
  );
};
