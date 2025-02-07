import PropTypes from "prop-types";
import "./Footer.scss";
import { FOOTER_TITLE } from "../../constants";
import FormComponent from "../FormComponent/FormComponent";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <div className="footer-title">{FOOTER_TITLE}</div>
          <p>aaaaaa</p>
        </div>
        <div className="footer-form">
          <FormComponent />
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
