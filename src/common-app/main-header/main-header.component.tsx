import clsx from "clsx";
import { containerStyles } from "./styles";

export const MainHeader: React.FC = () => {
  const navStyles = clsx(`
        flex flex-row items-center justify-center  
        border-red-700 border-2 w-full
        `);

  return (
    <header data-component="MainHeader" className={containerStyles}>
      <div className="flex flex-row justify-between items-center gap-2 w-[500px] flex-none  border-slate-600 border-2">
        <h3 className="flex items-center justify-center min-w-[160px] h-[32px] text-rfe-title-pink font-bold font-[liberation-serif] text-[22px]">
          Maison du Chat
        </h3>
        <nav className={navStyles}>
          <ul>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">New Arrivals</a>
            </li>
            <li>
              <a href="#">Sale</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
