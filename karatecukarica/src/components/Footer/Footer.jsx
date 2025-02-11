import "./Footer.scss";
import {FOOTER_TITLE, FOOTER_TXT1, FOOTER_TXT2} from "../../constants";
import FormComponent from "../FormComponent/FormComponent";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <div className="footer-title">{FOOTER_TITLE}</div>
          <div>
            {FOOTER_TXT1}
            {FOOTER_TXT2}
          </div>
        </div>
        <div className="footer-form">
          <FormComponent/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
