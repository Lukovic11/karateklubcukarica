import styles from "./HamburgerIcon.module.scss";
import PropTypes from "prop-types";

const HamburgerIcon = ({ isActive = false, toggleMenu = () => {} }) => {
  return (
    <button
      className={`${styles.hamburgerIcon} ${isActive ? styles.active : ""}`}
      onClick={toggleMenu}
      aria-label={isActive ? "Close menu" : "Open menu"}
    >
      <div className={styles.hamburgerLines}></div>
    </button>
  );
};

HamburgerIcon.propTypes = {
  isActive: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

export default HamburgerIcon;
