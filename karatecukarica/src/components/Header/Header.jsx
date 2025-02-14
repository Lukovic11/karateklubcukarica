import { useEffect, useState } from "react";
import { HEADER_PAGE_LIST } from "../../constants.jsx";
import "./Header.scss";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const setActivePage = () => {
      const url = window.location.pathname.replace("/", ""); // Remove leading '/'
      setCurrentPage(url || ""); // Set empty string for homepage
    };
    setActivePage();
  }, []);

  const toggleMenu = () => {
    setMenuActive((prevState) => {
      const body = document.body;
      if (!prevState) {
        body.classList.add("no-scroll");
      } else {
        body.classList.remove("no-scroll");
      }
      return !prevState;
    });
  };

  const smoothScrollTo = (elementId, duration = 1000) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scrollProgress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * scrollProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  };

  return (
    <div className="top-navigation">
      <div
        className={`top-navigation-container ${isScrolled ? "scrolled" : ""}`}
      >
        <div className="hamburger-wrapper">
          <HamburgerIcon isActive={menuActive} toggleMenu={toggleMenu} />
        </div>
        <div
          className={`top-navigation-list-container ${
            menuActive ? "active" : ""
          }`}
        >
          <ul>
            {HEADER_PAGE_LIST.map((item, index) => (
              <li key={index + " " + item}>
                <a
                  id={item.toLowerCase().replace(/\s/g, "")}
                  href={
                    item === "Početna"
                      ? "/"
                      : `/${item.toLowerCase().replace(/\s/g, "")}`
                  }
                  className={
                    item !== "Kontakt" &&
                    currentPage ===
                      (item === "Početna"
                        ? ""
                        : item.toLowerCase().replace(/\s/g, ""))
                      ? "active-link"
                      : ""
                  }
                  onClick={(e) => {
                    if (item === "Kontakt") {
                      e.preventDefault();
                      document.getElementById("footer")?.scrollIntoView({ behavior: "instant" });
                    }
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
