import { proyects } from "../mocks/proyects.json";
import { SingleProyect } from "./SingleProyect";

function Potafolio() {
  return (
    <section
      id="portfolio"
      className="overflow-hidden pb-16 pt-8 md:pt-[4.5rem]"
    >
      <h3 className="title-section">Portafolio</h3>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {proyects.map((proyect, index) => {
          return <SingleProyect key={index} proyect={proyect} index={index} />;
        })}
      </div>
    </section>
  );
}
export default Potafolio;
