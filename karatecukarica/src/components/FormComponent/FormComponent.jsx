import {useState, useRef} from "react";
import {
    FIRSTNAME_EMPTY_ERROR,
    FIRSTNAME_NUMBER_ERROR,
    FORM_EMAIL,
    FORM_ERROR,
    FORM_ERROR_MESSAGE,
    FORM_FIRSTNAME,
    FORM_LASTNAME,
    FORM_QUESTION,
    FORM_SEND,
    FORM_SUBJECT,
    FORM_SUBMITTING,
    FORM_SUCCESS,
    FORM_SUCCESS_MESSAGE,
    LASTNAME_EMPTY_ERROR,
    LASTNAME_NUMBER_ERROR,
    QUESTION_EMPTY_ERROR,
    SUBJECT_EMPTY_ERROR,
} from "../../constants";
import Button from "../Button/Button";
import {motion} from "framer-motion";
import "./FormComponent.scss";
import emailjs from '@emailjs/browser'
import {Messages} from "primereact/messages";
import {PrimeReactProvider, PrimeReactContext} from 'primereact/api';
import 'primereact/resources/themes/mdc-light-deeppurple/theme.css';

const FormComponent = () => {
    const [focusedField, setFocusedField] = useState("");
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");
    const key = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
    const msgs = useRef(null);

    const [formData, setFormData] = useState({
        [FORM_FIRSTNAME]: "",
        [FORM_LASTNAME]: "",
        [FORM_EMAIL]: "",
        [FORM_SUBJECT]: "",
        [FORM_QUESTION]: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

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
        {label: FORM_FIRSTNAME, name: FORM_FIRSTNAME, type: "text"},
        {label: FORM_LASTNAME, name: FORM_LASTNAME, type: "text"},
        {label: FORM_EMAIL, name: FORM_EMAIL, type: "email"},
        {label: FORM_SUBJECT, name: FORM_SUBJECT, type: "text"},
        {label: FORM_QUESTION, name: FORM_QUESTION, type: "textarea"},
    ];

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            setIsSubmitting(true);
            const templateParams = {
                user_name: `${formData[FORM_FIRSTNAME]} ${formData[FORM_LASTNAME]}`,
                user_email: formData[FORM_EMAIL],
                subject: formData[FORM_SUBJECT],
                message: formData[FORM_QUESTION]
            }
            emailjs.send('contact_service', 'contact_form', templateParams, {publicKey: key})
                .then(() => {
                    setSubmitStatus(FORM_SUCCESS);
                    setFormData(
                        {
                            [FORM_FIRSTNAME]: "",
                            [FORM_LASTNAME]: "",
                            [FORM_EMAIL]: "",
                            [FORM_SUBJECT]: "",
                            [FORM_QUESTION]: "",
                        })

                    if (msgs.current) {
                        msgs.current.clear();
                        msgs.current.show([{
                            sticky: true,
                            life: 4000,
                            severity: 'success',
                            summary: 'Success',
                            detail: 'Message Content',
                            closable: true,
                        }
                        ]);
                    }
                })
                .catch((error) => {
                    console.error('EmailJS Error:', error);
                    setSubmitStatus(FORM_ERROR);
                    if (msgs.current) {
                        msgs.current.clear();
                        msgs.current.show({
                            sticky: false,
                            life: 4000,
                            severity: 'error',
                            summary: 'Error',
                            detail: 'Message Content',
                            closable: true
                        });
                    }
                })
                .finally(() => {
                    setIsSubmitting(false);
                });
        }
    };

    return (
        <div className="form-container">
            <form className="form-contact" onSubmit={onSubmit} autoComplete="off">
                {fields.map(({label, name, type}) => (
                    <motion.div className="form-field" key={name}>
                        <label className="form-label">{label}:</label>
                        {type === "textarea" ? (
                            <textarea
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                required
                                className="form-textarea"
                                autoComplete="off"
                            />
                        ) : (
                            <motion.input
                                type={type}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                required
                                className="form-input"
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
                                className="form-error"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.3}}
                            >
                                {errors[name]}
                            </motion.span>
                        )}
                    </motion.div>
                ))}
                <Button variation={""} text={isSubmitting ? FORM_SUBMITTING : FORM_SEND} disabled={isSubmitting}/>
            </form>
            <motion.div className="pop-up-msg" >
                <PrimeReactProvider><Messages ref={msgs}/></PrimeReactProvider>
            </motion.div>
        </div>
    );
};

export default FormComponent;
