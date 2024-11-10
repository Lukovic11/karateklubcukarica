import { useState } from "react";
import {
  FORM_FIRSTNAME,
  FORM_LASTNAME,
  FORM_EMAIL,
  FORM_SUBJECT,
  FORM_QUESTION,
  FORM_SEND,
} from "../../constants";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import "./FormComponent.scss";

const FormComponent = () => {
  const [focusedField, setFocusedField] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const fields = [
    { label: FORM_FIRSTNAME, name: FORM_FIRSTNAME, type: "text" },
    { label: FORM_LASTNAME, name: FORM_LASTNAME, type: "text" },
    { label: FORM_EMAIL, name: FORM_EMAIL, type: "email" },
    { label: FORM_SUBJECT, name: FORM_SUBJECT, type: "text" },
    { label: FORM_QUESTION, name: FORM_QUESTION, type: "textarea" },
  ];

  return (
    <div className="formContainer">
      <form className="formContact" onSubmit={handleSubmit} autoComplete="off">
          {fields.map(({ label, name, type }) => (
            <motion.div className="formField" key={name}>
              <label className="formLabel">{label}:</label>
              {type === "textarea" ? (
                <textarea
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="formTextarea"
                  autoComplete="off"
                />
              ) : (
                <motion.input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="formInput"
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
            </motion.div>
          ))}
        <Button linkURL={"/"} variation={""} text={FORM_SEND} />
      </form>
    </div>
  );
};

export default FormComponent;
