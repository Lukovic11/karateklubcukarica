import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Button = (props) => {
  return (
    <motion.button
      to={props.linkURL}
      className={`button${props.variation}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {props.text}
    </motion.button>
  );
};
Button.propTypes = {
  linkURL: PropTypes.string.isRequired,
  variation: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
