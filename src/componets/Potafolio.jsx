import { ArrowUpRight, Github } from "./SVGIcons";
import clsx from "clsx";
import { proyects } from "../mocks/proyects.json";
import ecommerce from "../assets/ecommerce.png";

function Potafolio() {
  return (
    <section
      id="portfolio"
      className="relative  overflow-hidden border border-solid border-gray-50/5 pb-16 pt-8 md:pt-[4.5rem]"
    >
      <h3 className="title-section">Portafolio</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {proyects.map((proyecto, index) => {
          const { title, img, enlaceGithub, enlaceWeb, lenguages, content } =
            proyecto;
          return (
            <article
              key={title}
              className={clsx(
                "relative w-auto overflow-hidden rounded-xl border-2 border-gray-700/30 bg-clip-padding p-4 pb-4 shadow-lg",
                index === 0 &&
                  "bg-[linear-gradient(120deg,var(--tw-gradient-stops))] from-green-400/70 to-cyan-600/80 shadow-cyan-600/20",
                index === 1 &&
                  "bg-[linear-gradient(40deg,var(--tw-gradient-stops))] from-pink-300/80 to-violet-500/40 shadow-violet-500/20",
                index === 2 &&
                  "bg-[linear-gradient(140deg,var(--tw-gradient-stops))] from-cyan-400/80 to-indigo-700/50 shadow-indigo-700/20",
                index === 3 &&
                  "bg-[linear-gradient(140deg,var(--tw-gradient-stops))] from-orange-500/50 to-yellow-500/80 shadow-yellow-500/20",
                index === 4 &&
                  "bg-[linear-gradient(120deg,var(--tw-gradient-stops))] from-green-400/70 to-cyan-600/80 shadow-cyan-600/20",
                index === 5 &&
                  "bg-[linear-gradient(180deg,var(--tw-gradient-stops))] from-gray-200/40 to-rose-500/80 shadow-rose-500/20",
                index === 6 &&
                  "bg-[linear-gradient(120deg,var(--tw-gradient-stops))] from-yellow-300/80 to-rose-600/80 shadow-rose-600/20",
                index === 7 &&
                  "bg-[linear-gradient(40deg,var(--tw-gradient-stops))] from-pink-300/80 to-violet-500/40 shadow-violet-500/20",
              )}
            >
              <figure>
                <img
                  src={ecommerce}
                  className="rounded-t-lg object-cover object-center [mask-image:linear-gradient(180deg,#fff_16.35%,rgb(255_255_255_/_0%)_91.66%)]"
                />
              </figure>

              <main className="relative flex flex-col justify-between px-3 pb-3 pt-1">
                <div className="flex flex-col gap-3">
                  <h4 className="text-xl font-semibold text-gray-700 first-letter:uppercase dark:text-modeDarkTitle">
                    {title}
                  </h4>

                  <div className="-ml-0.5 mt-0.5 flex flex-wrap items-center gap-1 tracking-tight text-slate-100 dark:text-slate-300">
                    {lenguages.map((len, i) => {
                      return (
                        <h3
                          key={i}
                          className="flex items-center gap-1 rounded border border-gray-700/10 bg-gray-900/50 px-1.5 py-[2px] text-[14px] dark:bg-gray-900/20"
                        >
                          {len}
                        </h3>
                      );
                    })}
                  </div>

                  <p className="mb-6 mt-2 line-clamp-2 text-[15px] tracking-tight text-gray-700 dark:text-gray-200">
                    {content}
                  </p>
                </div>
              </main>

              <footer className="absolute bottom-3 left-0 mt-auto flex w-full items-end justify-end gap-2 px-4">
                {enlaceGithub && (
                  <a
                    href={enlaceGithub}
                    target="_blanck"
                    rel="noreferrer"
                    className="w-5 cursor-pointer fill-slate-800 hover:fill-slate-100 dark:fill-slate-200 dark:hover:fill-slate-900"
                  >
                    <Github />
                  </a>
                )}
                {enlaceWeb && (
                  <a
                    href={enlaceWeb}
                    target="_blanck"
                    rel="noreferrer"
                    className="w-5 cursor-pointer fill-slate-800 hover:fill-slate-100 dark:fill-slate-200 dark:hover:fill-slate-900"
                  >
                    <ArrowUpRight />
                  </a>
                )}
              </footer>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export default Potafolio;
