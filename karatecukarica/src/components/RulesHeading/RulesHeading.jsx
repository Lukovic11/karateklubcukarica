import "./RulesHeading.scss"
import Button from "../../components/Button/Button.jsx";
import {
    BUTTON_VARIATION_TRANSPARENT,
    RULES_BUTTON_TEXT1,
    RULES_BUTTON_TEXT2,
    RULES_SUBTITLE1,
    RULES_SUBTITLE2,
    RULES_TEXT,
    RULES_TITLE,
    SCHEDULES_AND_LOCATIONS_URL
} from "../../constants.jsx";

import Modal from "../Modal/Modal.jsx";
import { useState } from "react";

const RulesHeading = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (<div className="rules-heading">
        <div className="title-segment">
            <h2>{RULES_TITLE}</h2>
            <div className="title-design subtitle">
                <p>{RULES_SUBTITLE1}</p>
                <p className="gray">{RULES_SUBTITLE2}</p>
            </div>
        </div>
        <div className="paragraph-segment">
            {RULES_TEXT}
        </div>
        <div className={"button-container"}>
            <Button className="button" linkURL={SCHEDULES_AND_LOCATIONS_URL} variation={BUTTON_VARIATION_TRANSPARENT}
                    text={RULES_BUTTON_TEXT1}   handleClick={() => setIsModalOpen(true)}/>
            <Button className="button" linkURL={SCHEDULES_AND_LOCATIONS_URL} variation={BUTTON_VARIATION_TRANSPARENT}
                    text={RULES_BUTTON_TEXT2}/>
        </div>
        {isModalOpen && (
            <Modal
                title={RULES_BUTTON_TEXT1}
                text="This is a placeholder text inside the modal."
                onClose={() => setIsModalOpen(false)}
            />
        )}
    </div>);
};

export default RulesHeading;
