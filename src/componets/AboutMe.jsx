import { Download } from "./SVGIcons";
import profile from "../assets/img-profile.jpg";

function AboutMe() {
  return (
    <section
      id="about"
      className="relative overflow-hidden pb-16 pt-8 md:pt-[4.5rem]"
    >
      <h3 className="title-section">Sobre Mi</h3>
      <div className="grid-cols-[.5fr 3fr] grid justify-center gap-4  md:grid-cols-[1fr,2fr] md:gap-10">
        <div className="order-1 flex flex-col gap-4">
          <div className="text-[#11181C] dark:text-[#a1a1aa]">
            Soy Marlon, un apasionado desarrollador web autodidacta de 22 años,
            dedicado a crear experiencias digitales únicas y funcionales.
            <br />
            <br />
            Con una mentalidad enfocada en el aprendizaje constante, busco
            enfrentar desafíos y superar expectativas en cada proyecto que
            emprendo.
          </div>
          <a href="#" className="button mx-auto md:ml-0">
            Descagar cv <Download />
          </a>
        </div>
        <div className="group relative z-30 mx-auto my-4 h-[180px] w-[180px] md:h-[235px] md:w-[220px] ">
          <img
            className="relative z-20 h-full w-full overflow-hidden rounded-sm object-cover"
            src={profile}
            alt="img profile"
          />
          <div className="absolute left-0 top-0 z-50 h-full w-full bg-blue-800/40 transition-colors duration-500 hover:bg-white/10"></div>
          <div className="content[''] absolute inset-0 -left-2 -top-2 z-10 h-[100%] w-[100%] rounded-sm border-[3px] border-slate-300 dark:border-[#006fee]" />
        </div>
      </div>
      <div className="bg-green-gradient-radial absolute bottom-0 right-0 z-0 h-[300px] w-[300px] scale-150 rounded-full opacity-20 -hue-rotate-30" />
    </section>
  );
}

export default AboutMe;
