import { useEffect, useState } from "react";
import { HEADER_PAGE_LIST } from "../../constants";
import styles from "./Header.module.scss";

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

  return <div className={styles.topNavigation}></div>;
};

export default Header;
