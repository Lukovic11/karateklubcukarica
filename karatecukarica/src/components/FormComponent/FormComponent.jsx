import { useState } from "react";
import {
  FORM_FIRSTNAME,
  FORM_LASTNAME,
  FORM_EMAIL,
  FORM_SUBJECT,
  FORM_QUESTION,
  FORM_SEND,
  FIRSTNAME_NUMBER_ERROR,
  FIRSTNAME_EMPTY_ERROR,
  LASTNAME_NUMBER_ERROR,
  LASTNAME_EMPTY_ERROR,
  SUBJECT_EMPTY_ERROR,
  QUESTION_EMPTY_ERROR,
} from "../../constants";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import "./FormComponent.scss";
import PropTypes from "prop-types";

const FormComponent = ({ handleSubmit }) => {
  const [focusedField, setFocusedField] = useState("");
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    [FORM_FIRSTNAME]: "",
    [FORM_LASTNAME]: "",
    [FORM_EMAIL]: "",
    [FORM_SUBJECT]: "",
    [FORM_QUESTION]: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formIsValid = true;
    let currentErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      const trimmedValue = value.trim();
      let error = "";
      let error_type = "";

      if (key === FORM_FIRSTNAME) {
        if (/\d/.test(trimmedValue)) {
          error = FIRSTNAME_NUMBER_ERROR;
          error_type = key;
        } else if (trimmedValue === "") {
          error = FIRSTNAME_EMPTY_ERROR;
          error_type = key;
        }
      } else if (key === FORM_LASTNAME) {
        if (/\d/.test(trimmedValue)) {
          error = LASTNAME_NUMBER_ERROR;
          error_type = key;
        } else if (trimmedValue === "") {
          error = LASTNAME_EMPTY_ERROR;
          error_type = key;
        }
      } else if (key === FORM_SUBJECT) {
        if (trimmedValue === "") {
          error = SUBJECT_EMPTY_ERROR;
          error_type = key;
        }
      } else if (key === FORM_QUESTION) {
        if (trimmedValue === "") {
          error = QUESTION_EMPTY_ERROR;
          error_type = key;
        }
      }

      if (error) {
        currentErrors[key] = error;
        formIsValid = false;
      }
    });

    setErrors(currentErrors);
    return formIsValid;
  };

  const fields = [
    { label: FORM_FIRSTNAME, name: FORM_FIRSTNAME, type: "text" },
    { label: FORM_LASTNAME, name: FORM_LASTNAME, type: "text" },
    { label: FORM_EMAIL, name: FORM_EMAIL, type: "email" },
    { label: FORM_SUBJECT, name: FORM_SUBJECT, type: "text" },
    { label: FORM_QUESTION, name: FORM_QUESTION, type: "textarea" },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      handleSubmit(formData);
    }
  };

  return (
    <div className="form_container">
      <form className="form_contact" onSubmit={onSubmit} autoComplete="off">
        {fields.map(({ label, name, type }) => (
          <motion.div className="form_field" key={name}>
            <label className="form_label">{label}:</label>
            {type === "textarea" ? (
              <textarea
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                className="form_textarea"
                autoComplete="off"
              />
            ) : (
              <motion.input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                className="form_input"
                onFocus={() => setFocusedField(name)}
                onBlur={() => setFocusedField("")}
                animate={{
                  borderBottomColor:
                    focusedField === name ? "#b20000" : "#f9f9f9",
                }}
                transition={{
                  duration: 0.4,
                  ease: "circInOut",
                }}
              />
            )}

            {errors[name] && (
              <motion.span
                className="form_error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {errors[name]}
              </motion.span>
            )}
          </motion.div>
        ))}
        <Button linkURL={"/"} variation={""} text={FORM_SEND} />
      </form>
    </div>
  );
};

FormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default FormComponent;
