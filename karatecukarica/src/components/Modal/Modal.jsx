import "./Modal.scss"
import {MODAL_BUTTON_CLOSE} from "../../constants.jsx";
import PropTypes from "prop-types";
import closeIcon from "../../assets/x-symbol.svg";
import {useEffect} from "react";

const Modal = ({title, text, onClose}) => {

  useEffect(() => {
    const scrollY = window.scrollY;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, []);

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