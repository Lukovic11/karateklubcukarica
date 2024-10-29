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
    { label: FORM_FIRSTNAME, name: "firstName", type: "text" },
    { label: FORM_LASTNAME, name: "lastName", type: "text" },
    { label: FORM_EMAIL, name: "email", type: "email" },
    { label: FORM_SUBJECT, name: "subject", type: "text" },
    { label: FORM_QUESTION, name: "question", type: "textarea" },
  ];

  return (
    <div className="form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        {fields.map(({ label, name, type }) => (
          <motion.div
            className="form-field"
            key={name}
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField("")}
            animate={{ scale: focusedField === name ? 1.05 : 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <label className="form-label">{label}:</label>
            {type === "textarea" ? (
              <textarea
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                className="form-textarea"
              />
            ) : (
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                className="form-input"
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
