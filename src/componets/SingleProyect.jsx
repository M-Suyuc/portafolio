import { clsx } from "clsx";
import ecommerce from "../assets/ecommerce.png";
import { ArrowUpRight, Github } from "./SVGIcons";

export const SingleProyect = ({ proyect, index }) => {
  const { title, enlaceGithub, enlaceWeb, lenguages, content } = proyect;

  return (
    <article
      key={title}
      className={clsx(
        "relative flex h-[380px] w-[340px] min-w-[340px] flex-col rounded-xl bg-clip-padding p-4",
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
      <figure className="relative flex h-[160px] ">
        <img
          alt={title}
          src={ecommerce}
          className="rounded-t-lg object-cover object-center [mask-image:linear-gradient(180deg,#fff_16.35%,rgb(255_255_255_/_0%)_91.66%)]"
        />
      </figure>

      <header className="">
        <h4 className="text-2xl font-bold tracking-tight text-gray-800 first-letter:uppercase dark:text-modeDarkTitle">
          {title}
        </h4>

        <div className="-ml-0.5 mt-0.5 flex flex-wrap items-center gap-2 tracking-tight text-gray-600 dark:text-gray-200">
          {lenguages.map((len, i) => {
            return (
              <h3
                key={i}
                className=" flex select-none items-center gap-1 whitespace-nowrap rounded border border-gray-700/10 bg-gray-200/30 px-1.5 py-[2px] text-[13px] font-medium text-gray-900/90 dark:bg-gray-900/30 dark:text-gray-50/80"
              >
                {len}
              </h3>
            );
          })}
        </div>
      </header>

      <main className="mt-2 text-[15px] tracking-tight text-gray-600 dark:text-gray-200 ">
        <p className="line-clamp-4">{content}</p>
      </main>

      <footer
        className="absolute bottom-3 left-0 z-50 mt-auto flex w-full items-end
      justify-end gap-2 px-4
      "
      >
        {enlaceGithub && (
          <a
            href={enlaceGithub}
            target="_blanck"
            rel="noreferrer"
            className="p-1 text-gray-700/80 text-gray-900 transition-all dark:text-gray-300/80"
          >
            <Github />
          </a>
        )}

        {enlaceWeb && (
          <a
            href={enlaceWeb}
            target="_blanck"
            rel="noreferrer"
            className="p-1 text-gray-800/70 transition-all hover:text-gray-50"
            aria-describedby="ver sitio"
          >
            <ArrowUpRight />
          </a>
        )}
      </footer>
    </article>
  );
};
