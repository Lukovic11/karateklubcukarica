import "./RulesHeading.scss";
import Button from "../../components/Button/Button.jsx";
import {
  BUTTON_VARIATION_TRANSPARENT,
  ENROLL_BUTTON_TEXT,
  RULES_SUBTITLE1,
  RULES_SUBTITLE2,
  RULES_TEXT,
  RULES_TITLE,
  RULES_BUTTON_TEXT1,
  RULES_BUTTON_TEXT2,
  MODAL_TITLE1,
  MODAL_TEXT1,
  MODAL_TITLE2,
  MODAL_TEXT2
} from "../../constants.jsx";
import Modal from "../Modal/Modal.jsx";
import { useState } from "react";
import karatedo from "../../assets/karatedo.svg";

const RulesHeading = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const handleOpenModal1 = () => {
    setModal1Open(true);
  };

  const handleCloseModal1 = () => {
    setModal1Open(false);
  };

  const handleOpenModal2 = () => {
    setModal2Open(true);
  };

  const handleCloseModal2 = () => {
    setModal2Open(false);
  };


  return (
    <div className="rules-heading">
      <img className="karatedo-img" src={karatedo} alt="" />
      <div className="title-segment">
        <h2>{RULES_TITLE}</h2>
        <div className="title-design subtitle">
          <p>{RULES_SUBTITLE1}</p>
          <p className="gray">{RULES_SUBTITLE2}</p>
        </div>
      </div>
      <div className="paragraph-segment">{RULES_TEXT}</div>
      <div className="button-container">
        <Button
          className="button"
          variation={BUTTON_VARIATION_TRANSPARENT}
          text={RULES_BUTTON_TEXT1}
          handleClick={() => handleOpenModal1(true)}
        />
        <Button
          className="button"
          variation={BUTTON_VARIATION_TRANSPARENT}
          text={RULES_BUTTON_TEXT2}
          handleClick={() => handleOpenModal2(true)}
        />
      </div>

      {modal1Open && (
        <Modal
          title={MODAL_TITLE1}
          text={MODAL_TEXT1}
          onClose={handleCloseModal1}
        />
      )}

      {modal2Open && (
        <Modal
          title={MODAL_TITLE2}
          text={MODAL_TEXT2}
          onClose={handleCloseModal2}
        />
      )}
    </div>
  );
};

export default RulesHeading;
