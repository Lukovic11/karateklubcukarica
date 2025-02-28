import {useEffect, useState} from "react";
import {HEADER_PAGE_LIST} from "../../constants.jsx";
import "./Header.scss";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import {useLocation} from "react-router-dom";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const setActivePage = () => {
      const url = window.location.pathname.replace("/", "");
      setCurrentPage(url || "");
    };
    setActivePage();
  }, []);

  useEffect(() => {
    const url = location.pathname.replace("/", "");
    setCurrentPage(url || "");
  }, [location]);

  const toggleMenu = (e) => {
    e.preventDefault();
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

  return (
    <div className="top-navigation">
      <div
        className={`top-navigation-container ${isScrolled ? "scrolled" : ""}`}
      >
        <div className="hamburger-wrapper">
          <HamburgerIcon isActive={menuActive} toggleMenu={toggleMenu}/>
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
                      if (menuActive) {
                        toggleMenu(e);
                        setTimeout(() => {
                          document.getElementById("footer")?.scrollIntoView({behavior: "instant"});
                        }, 50);
                      } else {
                        document.getElementById("footer")?.scrollIntoView({behavior: "instant"});
                      }
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
