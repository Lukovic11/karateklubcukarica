import styles from "./HamburgerIcon.module.scss";
import PropTypes from "prop-types";

const HamburgerIcon = ({ isActive, toggleMenu }) => {
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
  isActive: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

HamburgerIcon.defaultProps = {
  isActive: false,
  toggleMenu: () => {},
};

export default HamburgerIcon;
