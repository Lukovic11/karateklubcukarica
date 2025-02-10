import './Divider.scss';
import PropTypes from "prop-types";

const Divider = ({className = '', text1, text2}) => {
  return (
    <div className="divider-wrapper">
      <div className={`gradient-divider ${className}`}>
        <div className="line left"></div>
        {text1 && <span className="divider-text title-design"><p>{text1}</p><p className="gray">{text2}</p></span>}
        <div className="line right"></div>
      </div>
    </div>
  );
};

Divider.propTypes = {
  className: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string
}

export default Divider;