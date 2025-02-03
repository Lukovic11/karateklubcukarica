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
      const url = window.location.pathname;
      const activePage = HEADER_PAGE_LIST.find((item) =>
        url.includes(item.toLowerCase().replace(/\s/g, ""))
      );
      if (activePage) setCurrentPage(activePage);
    };
    setActivePage();
  }, []);

  const toggleMenu = () => {
    setMenuActive((prevState) => {
      document.body.style.overflow = prevState ? "auto" : "hidden";
      return !prevState;
    });
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
                  href={item.toLowerCase().replace(/\s/g, "")}
                  className={
                    currentPage === item.toLowerCase().replace(/\s/g, "")
                      ? "active-link"
                      : ""
                  }
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
