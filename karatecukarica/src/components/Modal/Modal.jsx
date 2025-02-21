import "./Modal.scss"
import Button from "../../components/Button/Button.jsx";
import {
    BUTTON_VARIATION_TRANSPARENT, RULES_BUTTON_TEXT1, RULES_BUTTON_TEXT2,
    RULES_SUBTITLE1, RULES_SUBTITLE2, RULES_TEXT,
    RULES_TITLE, SCHEDULES_AND_LOCATIONS_URL

} from "../../constants.jsx";
import PropTypes from "prop-types";
import closeIcon from "../../assets/x-symbol.svg";


const Modal = ({title, text, onClose}) => {
    return (
        <div className="modal-container">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={closeIcon} alt="Close" className="close-button" onClick={onClose}/>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Modal;

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};