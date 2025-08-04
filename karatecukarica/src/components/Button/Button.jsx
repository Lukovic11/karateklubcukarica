import PropTypes from "prop-types";
import {motion} from "framer-motion";

const Button = (props) => {

  return (
    <motion.button
      onClick={props.handleClick}
      className={`button${props.variation} ${props.className}`}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.95}}
    >
      {props.text}
    </motion.button>
  );
};
Button.propTypes = {
  variation: PropTypes.string.isRequired,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

export default Button;
