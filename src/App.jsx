import Container from "./componets/Container";
import { useEffect, useState } from "react";
import Nabvar from "./componets/Navbar";
import Footer from "./componets/Footer";
import AboutMe from "./componets/AboutMe";
import BtnscrollToTop from "./componets/BtnscrollToTop";
import HeaderMain from "./componets/HeaderMain";
import Potafolio from "./componets/Potafolio";
import Skills from "./componets/Skills";
import pattern from "./assets/looper-pattern.svg";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 75) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed bottom-0 left-0 z-40 w-full gap-x-4 bg-white md:bottom-[initial] md:top-0 ${
          isVisible
            ? "dark:bg-black md:bg-white md:dark:text-white"
            : "border-t border-solid border-white/10 dark:bg-black dark:text-slate-200 md:border-none md:bg-opacity-0 md:backdrop-blur-[4px] md:dark:bg-transparent "
        }`}
      >
        <Nabvar isVisible={isVisible} />
        <BtnscrollToTop isVisible={isVisible} />
      </header>
      <main className="relative w-full overflow-hidden bg-slate-50 dark:bg-black">
        {/* circulo azul del inicio */}
        <div className="absolute left-0 top-0 z-0 h-[500px] w-[500px] scale-150 rounded-full bg-blue-gradient-radial opacity-30" />
        <div
          style={{ backgroundImage: `url(${pattern})` }}
          className="absolute -top-0  left-0 h-[calc(100vh_-_0rem)] w-full bg-cover md:left-28"
        />
        <Container>
          <HeaderMain />
          <AboutMe />
          <Potafolio />
          <Skills />
        </Container>
      </main>
      <Footer />
    </>
  );
}
export default App;
