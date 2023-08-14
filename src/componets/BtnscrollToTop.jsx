import { useEffect, useState } from "react";
import { ArrowUp } from "./SVGIcons";

function BtnscrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        className="button fixed bottom-16 right-4 -z-10 rounded  px-1 py-1 md:bottom-4"
        onClick={scrollToTop}
      >
        <ArrowUp />
      </button>
    )
  );
}

export default BtnscrollToTop;
