import splitImage from "../../assets/split-img.jpg";
import { SPLIT_IMG_ALT, SPLIT_TITLE, SPLIT_TEXT } from "../../constants";
import Button from "../Button/Button";
import "./Split.scss";
import PropTypes from "prop-types";

const Split = ({ orientation, buttonProps }) => {
  return (
    <div className={`split-container ${orientation ? orientation : ""}`}>
      <img src={splitImage} alt={SPLIT_IMG_ALT} />
      <div className="inner-content">
        <h3>{SPLIT_TITLE}</h3>
        <p>{SPLIT_TEXT}</p>
        {buttonProps && <Button className="button-split" {...buttonProps} />}
      </div>
    </div>
  );
};

Split.propTypes = {
  orientation: PropTypes.string,
};

export default Split;
