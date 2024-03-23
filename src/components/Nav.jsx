import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../contants";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className=" flex-1 flex justify-center items-center gap-16 max-lg:hidden  ">
          {navLinks.map((item) => (
            <li key={item.label} className="max-sm:my-5 z-20">
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {isOpen && (
          <ul className=" max-sm:bg-white max-sm:w-full max-sm:text-center max-sm:justify-normal max-sm:items-center max-sm:gap-16 max-lg:hidden max-lg:absolute max-sm:flex max-sm:flex-col max-sm:left-[0%] max-sm:top-[100%] z-20 h-[100vh] ">
            {navLinks.map((item) => (
              <li key={item.label} className="max-sm:my-2 z-20">
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="hidden max-lg:block" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? (
            <img src={hamburger} width={25} height={25} alt="hamburgerIcon" />
          ) : (
            <p className=" font-montserrat text-lg text-slate-500 border-2 px-4 py-2 rounded-full">
              X
            </p>
          )}
        </div>
        <h4 className="text-lg font-montserrat pr-20 font-medium max-lg:hidden">
          <a href="\">Sign in / Explore now</a>
        </h4>
      </nav>
    </header>
  );
};

export default Nav;
