import './Divider.scss';
import PropTypes from "prop-types";

const Divider = ({className = '', text}) => {
  return (
    <div className="divider-wrapper">
      <div className={`gradient-divider ${className}`}>
        <div className="line left"></div>
        {text && <span className="divider-text">{text}</span>}
        <div className="line right"></div>
      </div>
    </div>
  );
};

Divider.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
}

export default Divider;