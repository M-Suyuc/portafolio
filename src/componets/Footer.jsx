import React from "react";
import { Github, Linkedin } from "./SVGIcons";

function Footer() {
  return (
    <footer className="bg-neutral-200 py-8 text-center text-white dark:bg-black/90">
      <div className="container pb-[3rem] md:pb-0">
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/marlon-suyuc/"
            target="_blank"
            aria-label="linkedin"
            className="w-8 hover:fill-[#006fee] dark:fill-white/70 dark:hover:fill-[#006fee]"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/M-Suyuc/"
            target="_blank"
            aria-label="Github"
            className="w-8 hover:fill-[#006fee] dark:fill-white/70 dark:hover:fill-[#006fee]"
            rel="noreferrer"
          >
            <Github />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
