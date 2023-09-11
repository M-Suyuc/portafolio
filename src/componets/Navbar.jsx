import React, { useEffect, useState } from "react";
import {
  CloseMenu,
  Home,
  Menu,
  Moon,
  Portfolio,
  Profile,
  Skills,
  Sun,
} from "./SVGIcons";
import Container from "../componets/Container";

function Navbar({ isVisible }) {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeDarkMode = () => {
    setDarkMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (darkMode === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Container>
      <nav className="flex h-[3.5rem] items-center justify-between md:h-[4.5rem]">
        <a
          href="#"
          className="logo text-xl font-extrabold md:text-3xl md:font-extrabold"
        >
          Marlon
        </a>
        <div
          className={`fixed ${
            isOpen
              ? "bottom-0 border-t border-solid border-white/20 md:border-none"
              : "-bottom-full"
          } left-0 ml-auto w-full rounded-t-3xl bg-white pb-16 pt-8 shadow-[5px_15px_60px_rgba(0,0,0,.5)] dark:bg-black  md:static md:max-w-max md:rounded-none md:bg-transparent md:pb-0 md:pt-0 md:shadow-none`}
        >
          <ul
            className="grid grid-cols-3 gap-8 md:flex md:gap-0 
            [&>li>a]:flex [&>li>a]:flex-col [&>li>a]:items-center [&>li>a]:font-medium  [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:md:px-4 [&>li>a]:md:text-lg"
          >
            <li>
              <a
                href="#"
                onClick={toggleMenu}
                className="hover:fill-[#006fee] hover:text-[#006fee] dark:fill-white/80 dark:text-white/80 dark:hover:fill-[#006fee] dark:hover:text-[#006fee] md:hover:bg-slate-500/25 dark:md:hover:bg-white/10"
              >
                <Home />
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={toggleMenu}
                className="hover:fill-[#006fee] hover:text-[#006fee] dark:fill-white/80 dark:text-white/80 dark:hover:fill-[#006fee] dark:hover:text-[#006fee] md:hover:bg-slate-500/25 dark:md:hover:bg-white/10"
              >
                <Profile />
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                onClick={toggleMenu}
                className="hover:fill-[#006fee] hover:text-[#006fee] dark:fill-white/80 dark:text-white/80 dark:hover:fill-[#006fee] dark:hover:text-[#006fee] md:hover:bg-slate-500/25 dark:md:hover:bg-white/10"
              >
                <Portfolio />
                Portafolio
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={toggleMenu}
                className="hover:fill-[#006fee] hover:text-[#006fee] dark:fill-white/80 dark:text-white/80 dark:hover:fill-[#006fee] dark:hover:text-[#006fee] md:hover:bg-slate-500/25 dark:md:hover:bg-white/10"
              >
                <Skills />
                Skills
              </a>
            </li>
          </ul>
          <div
            className="absolute bottom-5 right-10 cursor-pointer hover:fill-[#006fee] dark:fill-white/80 dark:hover:fill-[#006fee]"
            onClick={toggleMenu}
          >
            <CloseMenu />
          </div>
        </div>
        <div className="flex gap-4 md:gap-0">
          <div
            onClick={changeDarkMode}
            className={`cursor-pointer hover:fill-[#006fee] dark:fill-modeDarkTitle dark:hover:fill-[#006fee] ${
              isVisible && "dark:fill-black"
            }`}
          >
            {darkMode ? <Moon /> : <Sun />}
          </div>
          <div
            onClick={toggleMenu}
            className="cursor-pointer hover:fill-[#006fee] dark:fill-modeDarkTitle  dark:hover:fill-[#006fee]"
          >
            <Menu />
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default Navbar;
