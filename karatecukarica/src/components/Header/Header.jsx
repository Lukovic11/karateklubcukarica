import { useEffect, useState } from "react";
import { HEADER_PAGE_LIST } from "../../constants";
import styles from "./Header.module.scss";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

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
    <div className={styles.topNavigation}>
      <div className={styles.topNavigationContainer}>
        <div className={styles.hamburgerWrapper}>
          <HamburgerIcon isActive={menuActive} toggleMenu={toggleMenu} />
        </div>
        <div
          className={`${styles.topNavigationListContainer} ${
            menuActive ? styles.active : ""
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
                      ? styles.activeLink
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
