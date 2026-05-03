import React from "react";

interface BoxTextProps {
  title: string;
  value: string;
}

export const BoxText: React.FC<BoxTextProps> = ({ title, value }) => {
  const containerStyles = `
    flex flex-row items-center justify-center gap-2 
    bg-rfe-surface-dim p-2 w-[150px] 
    rounded-rfe-radius-base text-center
  `;

  const labelStyles = "text-rfe-on-surface font-bold";
  const valueStyles = "text-rfe-on-surface-variant";

  return (
    <div data-component="BoxText" className={containerStyles}>
      <strong className={labelStyles}>{title}</strong>
      <span className={valueStyles}>{value}</span>
    </div>
  );
};
