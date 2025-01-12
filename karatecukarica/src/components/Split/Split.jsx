import splitImage from "../../assets/split-img.jpg";
import {SPLIT_IMG_ALT, SPLIT_TEXT} from "../../constants.jsx";
import Button from "../Button/Button";
import "./Split.scss";
import PropTypes from "prop-types";

const Split = ({orientation, buttonProps, title}) => {
  return (
    <div className={`split-container ${orientation ? orientation : ""}`}>
      <img src={splitImage} alt={SPLIT_IMG_ALT}/>
      <div className="inner-content">
        {title && <h3>{title}</h3>}
        <p>{SPLIT_TEXT}</p>
        {buttonProps && <Button className="button-split" {...buttonProps} />}
      </div>
    </div>
  );
};

Split.propTypes = {
  orientation: PropTypes.string,
  buttonProps: PropTypes.object,
  title: PropTypes.string
};

export default Split;
