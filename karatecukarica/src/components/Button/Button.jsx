import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(props.linkURL);
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`button${props.variation} ${props.className}`}
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
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Button;
