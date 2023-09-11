import React from "react";
import { ArrowDown, Contactme, Github, Linkedin } from "./SVGIcons";
import profile from "../assets/img-profile.png";

function HeaderMain() {
  return (
    <section className="relative flex min-h-[calc(100vh-3rem)] items-center md:min-h-screen">
      <div className="grid-cols-[.5fr, 3fr] z-30 grid items-center overflow-hidden md:grid-cols-[max-content,1fr,1fr]">
        {/* icons */}
        <div className="flex flex-col gap-y-4">
          <a
            href="https://www.linkedin.com/in/marlon-suyuc/"
            target="_blank"
            aria-label="linkedin"
            className="h-8 w-8 fill-gray-800 hover:fill-[#006fee] dark:fill-slate-200 dark:hover:fill-[#006fee]"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/M-Suyuc/"
            target="_blank"
            aria-label="Github"
            className="h-8 w-8 fill-gray-800 hover:fill-[#006fee] dark:fill-slate-200 dark:hover:fill-[#006fee]"
            rel="noreferrer"
          >
            <Github />
          </a>
        </div>

        {/* img */}
        <div className="relative my-10 mb-5 h-[180px] w-[180px] max-w-[300px] overflow-hidden rounded-full shadow-[0px_0px_25px_rgba(0,0,0,.3)] dark:shadow-[0px_0px_40px_rgba(255,255,255,.4)]  md:order-1 md:m-12 md:h-[250px] md:w-[250px] md:place-self-center lg:h-[300px]  lg:w-[300px] lg:place-self-end">
          <img src={profile} alt="Imagen perfil" />
        </div>

        {/* Text */}
        <div className="col-[1/3] pb-4 md:col-[initial] md:ml-4 md:pb-0 md:pt-0 lg:ml-12">
          <h1 className="pb-1 text-xl font-semibold text-zinc-700 dark:text-modeDarkTitle md:text-xl md:font-bold lg:text-2xl">
            Hola, Soy Marlon
          </h1>
          <h3 className="mb-1 inline-block bg-black bg-gradient-to-r from-indigo-600 to-pink-500 box-decoration-slice px-2 py-2  text-lg font-medium text-white md:text-xl lg:text-3xl  lg:font-bold">
            Frontend Developer
          </h3>
          <p className="pb-3 text-zinc-700 dark:text-modeDarkParrafo">
            Creando soluciones modernas e interactivas. Comprometido con la
            seguridad y la mejora continua.
          </p>
          <a
            href="mailto:marlonsuyuc@gmail.com"
            className="button ml-1 md:ml-0"
          >
            Contactame <Contactme hidden={false} />
          </a>
        </div>
      </div>
      <a
        href="#about"
        aria-label="scrool"
        className="absolute bottom-0 left-[50%] right-[50%] hidden h-8 w-8 animate-bounce bg-black/20 fill-black dark:bg-white/10 dark:fill-white/50 md:inline "
      >
        <ArrowDown />
      </a>
    </section>
  );
}

export default HeaderMain;
