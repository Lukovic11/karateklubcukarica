import "./Modal.scss"
import {MODAL_BUTTON_CLOSE} from "../../constants.jsx";
import PropTypes from "prop-types";
import closeIcon from "../../assets/x-symbol.svg";

const Modal = ({title, text, onClose}) => {
    return (
        <div className="modal-container" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={closeIcon} alt={MODAL_BUTTON_CLOSE} className="close-button" onClick={onClose}/>
                <h2>{title}</h2>
                {text}
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