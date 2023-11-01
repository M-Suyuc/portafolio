import {
  CssSvg,
  GitSvg,
  HtmlSvg,
  JavaScriptSvg,
  ReactSvg,
  ReduxSvg,
  TailwindSvg,
  TypeScriptSvg,
} from "./SVGIcons";

function Skills() {
  const LogosSkills = [
    {
      title: "React.js",
      img: <ReactSvg />,
    },
    {
      title: "JavaScript",
      img: <JavaScriptSvg />,
    },
    {
      title: "TypeScript",
      img: <TypeScriptSvg />,
    },
    {
      title: "Redux Toolkit",
      img: <ReduxSvg />,
    },
    {
      title: "Git",
      img: <GitSvg />,
    },
    {
      title: "Tailwind",
      img: <TailwindSvg />,
    },
    {
      title: "HTML",
      img: <HtmlSvg />,
    },
    {
      title: "CSS",
      img: <CssSvg />,
    },
  ];
  return (
    <section
      id="skills"
      className="relative overflow-hidden pb-16 pt-8 md:pt-[4.5rem]"
    >
      <h3 className="title-section pb-4">Tecnologías</h3>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {LogosSkills.map((logo, i) => (
          <div
            key={i}
            className="group z-20 flex max-w-xs flex-col items-center space-y-2 rounded-lg  border  border-transparent bg-white/5 p-4 shadow-[0px_0px_15px_rgba(0,0,0,.2)]"
          >
            <div className="aspect-square  duration-200 group-hover:-rotate-12 group-hover:scale-125 group-hover:drop-shadow-[0_0_2rem_#006fee]">
              {logo.img}
            </div>
            <h3 className=" break-words font-medium text-[#11181C] dark:text-[#a1a1aa]">
              {logo.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="absolute -bottom-1/2 left-0 right-0 m-auto  h-[550px] w-[550px] rounded-full bg-yellow-gradient-radial opacity-20" />
    </section>
  );
}

export default Skills;
