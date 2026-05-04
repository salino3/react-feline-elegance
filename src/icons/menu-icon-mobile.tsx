interface Props {
  click?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export const MenuIconMobile: React.FC<Props> = ({ click }) => (
  <div
    onClick={click}
    className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-transparent hover:border-cyan-700 hover:bg-slate-300 cursor-pointer transition-all"
  >
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z" fill="#064E3B" />
    </svg>
  </div>
);
