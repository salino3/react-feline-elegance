import clsx from "clsx";

export const MainHeader: React.FC = () => {
  const containerStyles = clsx(`
        flex flex-row items-center justify-center  
        w-full bg-rfe-primary-container h-[85px]
        `);

  const navStyles = clsx(`
        flex flex-row items-center justify-center  
        w-full bg-rfe-primary-container h-[85px]
        `);

  return (
    <header data-component="MainHeader" className={containerStyles}>
      <div>
        <h3 className="flex items-center justify-center w-[160px] h-[32px] text-rfe-title-pink font-bold font-[liberation-serif] text-[22px]">
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
